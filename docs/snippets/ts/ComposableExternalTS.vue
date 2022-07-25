<script setup lang="ts">
import { ref } from "vue";
import { useIncrementalList } from "../index";
import ResultBox from "../ResultBox.vue";

interface Example {
  value: string;
}

const model = (): Example => ({ value: "" });
const items = ref<Example[]>([{ value: "Hello" }, { value: "World" }]);

const list = useIncrementalList<Example>({
  model,
  items,
});
const { shownItems, clearEmpty } = list;
</script>

<template>
  <ResultBox>
    <div v-for="(item, index) in shownItems" :key="index">
      <label>
        <input v-model="item.value" @blur="clearEmpty()" />
      </label>
    </div>
    <template #debug="{ format }">{{ format({ items, list }) }}</template>
  </ResultBox>
</template>
