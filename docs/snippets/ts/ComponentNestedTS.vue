<script setup lang="ts">
import { ref, nextTick } from "vue";
import { useIncrementalListComponent } from "../index";
import ResultBox from "../ResultBox.vue";

type PetType = "cat" | "dog" | "bird";
interface Pet {
  name: string;
  type: PetType | null;
}
interface Person {
  name: string;
  pets: Pet[];
}

const petModel = (): Pet => ({ name: "", type: null });
const personModel = (): Person => ({ name: "", pets: [] });

interface PetTypeOption {
  value: PetType;
  label: string;
}
const petTypes: PetTypeOption[] = [
  { value: "cat", label: "Gato" },
  { value: "dog", label: "Cachorro" },
  { value: "bird", label: "Ave" },
];

const people = ref<Person[]>([
  {
    name: "Magali",
    pets: [{ name: "Mingau", type: "cat" }],
  },
  {
    name: "Cebolinha",
    pets: [{ name: "Floquinho", type: "dog" }],
  },
  {
    name: "Mônica",
    pets: [{ name: "Monicão", type: "dog" }],
  },
]);

const PersonIncrementalList = useIncrementalListComponent<Person>(personModel);
const PetIncrementalList = useIncrementalListComponent<Pet>(petModel);
</script>

<template>
  <ResultBox>
    <PersonIncrementalList v-model="people">
      <template #item="personRow">
        <div class="row">
          <div class="col">
            <div>
              <label>
                Nome:
                <input
                  v-model="personRow.item.name"
                  @blur="personRow.clearEmpty()"
                />
              </label>
            </div>
            <div class="text-right" v-if="!personRow.isNew">
              <button tabindex="-1" @click="personRow.remove()">Remover</button>
            </div>
          </div>
          <template v-if="!personRow.isNew">
            <div class="col pets">
              <PetIncrementalList
                v-model="personRow.item.pets"
                @itemsRemoved="personRow.clearEmpty()"
              >
                <template #item="petRow">
                  <div>
                    <label>
                      Pet:
                      <input
                        v-model="petRow.item.name"
                        @blur="petRow.clearEmpty()"
                      />
                    </label>
                    <label>
                      Type:
                      <select v-model="petRow.item.type">
                        <option
                          v-for="{ value, label } in petTypes"
                          :key="value"
                          :value="value"
                        >
                          {{ label }}
                        </option>
                      </select>
                    </label>
                    <button
                      tabindex="-1"
                      @click="
                        async () => {
                          petRow.remove();
                          await nextTick();
                          personRow.clearEmpty();
                        }
                      "
                    >
                      Remover
                    </button>
                  </div>
                </template>
                <template #newItem="petRow">
                  <div>
                    <label>Pet: <input v-model="petRow.item.name" /></label>
                  </div>
                </template>
              </PetIncrementalList>
            </div>
          </template>
        </div>
        <hr />
      </template>
    </PersonIncrementalList>
    <template #debug="{ format }">{{ format({ people }) }}</template>
  </ResultBox>
</template>

<style scoped>
.row {
  padding: 8px 0;
  display: flex;
  flex-wrap: nowrap;
}
.col.pets {
  flex: 1;
  padding-left: 8px;
}
.text-right {
  text-align: right;
  padding-right: 16px;
}
label {
  display: inline-block;
  padding: 8px;
  padding-right: 16px;
}
input,
select {
  display: block;
}
hr.vl {
  flex: 0 1 1px;
}
.index {
  display: inline-block;
  font-weight: bold;
  white-space: nowrap;
  width: 48px;
}
</style>
