import { ref, computed, watch, defineComponent, nextTick } from "vue";
import type { Ref, PropType, ComputedRef } from "vue";

export type IncrementalListClearEmptyCallback<Child> = (
  a: Child | null,
  b: Child | null
) => boolean;

interface IncrementalListBaseOptions<Child> {
  model: () => Child;
  emptyComparator?: IncrementalListClearEmptyCallback<Child>;
  onNewChild?: (child: Child) => void;
  onRemoveChildren?: (children: Child[]) => void;
}
interface IncrementalListInternalOptions<Child>
  extends IncrementalListBaseOptions<Child> {
  initialValue?: Child[];
}
interface IncrementalListExternalOptions<Child>
  extends IncrementalListBaseOptions<Child> {
  items: Ref<Child[]>;
}

interface IncrementalListExternalResult<Child> {
  shownItems: ComputedRef<Child[]>;
  empty: ComputedRef<Child[]>;
  clearEmpty: (callback?: IncrementalListClearEmptyCallback<Child>) => void;
  removeItems: (removedItems: Child[]) => void;
  newItem: Ref<Child>;
}
interface IncrementalListInternalResult<Child>
  extends IncrementalListExternalResult<Child> {
  items: Ref<Child[]>;
}

function useIncrementalListExternal<Child>(
  options: IncrementalListExternalOptions<Child>
): IncrementalListExternalResult<Child> {
  const { items, model, emptyComparator } = options;

  const emptyItem = model();
  const newItem = ref<Child>(model()) as Ref<Child>;
  const shownItems = computed(() => [...items.value, newItem.value]);

  const isEmpty = (value: Child) =>
    emptyComparator?.(value, emptyItem) ??
    JSON.stringify(value) === JSON.stringify(emptyItem);

  const empty = computed(() => items.value.filter((item) => isEmpty(item)));
  const clearEmpty = (callback?: IncrementalListClearEmptyCallback<Child>) => {
    const removed = items.value.filter(
      (item) => callback?.(item, emptyItem) ?? empty.value.includes(item)
    );
    items.value = items.value.filter((item) => !removed.includes(item));
    options.onRemoveChildren?.(removed);
  };
  const removeItems = (removedItems: Child[]) => {
    items.value = items.value.filter((item) => !removedItems.includes(item));
  };

  watch(
    () => newItem.value,
    (newValue) => {
      if (isEmpty(newValue)) return;
      newItem.value = model();
      items.value.push(newValue);
      options.onNewChild?.(newValue);
    },
    { deep: true }
  );
  return {
    shownItems,
    clearEmpty,
    empty,
    newItem,
    removeItems,
  };
}

function useIncrementalListInternal<Child>(
  options: IncrementalListInternalOptions<Child>
): IncrementalListInternalResult<Child> {
  const { initialValue, ...externalOptions } = options;
  const items = ref<Child[]>(initialValue ?? []) as Ref<Child[]>;
  return {
    ...useIncrementalListExternal({ ...externalOptions, items }),
    items,
  };
}

export function useIncrementalList<Child>(
  options: IncrementalListInternalOptions<Child>
): IncrementalListInternalResult<Child>;
export function useIncrementalList<Child>(
  options: IncrementalListExternalOptions<Child>
): IncrementalListExternalResult<Child>;
export function useIncrementalList<Child>(options: any): any {
  return options.items !== undefined
    ? useIncrementalListExternal<Child>(options)
    : useIncrementalListInternal<Child>(options);
}

export interface IncrementalListComponentProps<Child>
  extends IncrementalListBaseOptions<Child> {
  value: Ref<Child[]>;
}

export function useIncrementalListComponent<Child>(model: () => Child) {
  return defineComponent({
    props: {
      modelValue: { type: Object as PropType<Child[]>, required: true },
      emptyComparator: {
        type: Function as PropType<IncrementalListClearEmptyCallback<Child>>,
        default: null,
      },
    },
    emits: ["update:modelValue", "itemAdded", "itemsRemoved"],
    setup(props, { slots, emit }) {
      const { modelValue, ...options } = props;
      const list = useIncrementalList<Child>({
        ...options,
        initialValue: modelValue,
        model,
        onRemoveChildren: (removed: Child[]) => emit("itemsRemoved", removed),
        onNewChild: (item: Child) => emit("itemAdded", item),
      });
      const { items, shownItems, empty, clearEmpty, newItem, removeItems } =
        list;
      watch(
        () => props.modelValue,
        () => {
          if (JSON.stringify(props.modelValue) === JSON.stringify(items.value))
            return;
          items.value = props.modelValue;
        },
        { deep: true }
      );
      watch(
        () => items.value,
        (newValue) => emit("update:modelValue", newValue)
      );
      return () => {
        if (!slots.item) return null;
        return shownItems.value.map((item: Child) => {
          const slotProps = {
            item,
            clearEmpty: async (
              callback?: IncrementalListClearEmptyCallback<Child>
            ): Promise<void> => {
              clearEmpty(callback);
              await nextTick();
              emit("itemsRemoved");
            },
            remove: () => removeItems([item]),
            isEmpty: empty.value.includes(item),
            isNew: item === newItem.value,
          };
          return slots.newItem && slotProps.isNew
            ? slots.newItem(slotProps)
            : slots.item?.(slotProps);
        });
      };
    },
  });
}
