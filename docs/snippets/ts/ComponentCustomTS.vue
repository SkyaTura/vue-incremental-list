<script setup lang="ts">
import { ref } from "vue";
import { useIncrementalListComponent } from "../index";
import ResultBox from "../ResultBox.vue";

interface Example {
  name: string;
  nickname: string;
  type: "Person" | "Company";
}

const model = (): Example => ({ file: "", label: "" });
const value = ref<Example[]>([]);

const ExampleList = useIncrementalListComponent<Example>(model);

const addFile = (item: Example, event: Event) => {
  console.log(event);
  const { files } = event.target as HTMLInputElement;
  if (!files.length) return;
  const [file] = files;
  Object.assign(item, {
    file: file.name,
    label: file.name,
  });
};
</script>

<template>
  <ResultBox>
    <ExampleList v-model="value">
      <template #item="{ item, isNew, remove }">
        <div>
          <label>{{ item.type }} name: <input v-model="item.name" /></label>
          <label v-if="item.type === 'Person'">
            Nickname: <input v-model="item.nickname" />
          </label>
          <button tabindex="-1" v-if="!isNew" @click="remove()">Remove</button>
        </div>
      </template>
      <template #newItem="{ item }">
        <div>
          <label>
            Add:
            <select placeholder="select" v-model="item.type">
              <option disabled value="">Select</option>
              <option value="Person">Person</option>
              <option value="Company">Company</option>
            </select>
          </label>
        </div>
      </template>
    </ExampleList>
    <template #debug="{ format }">{{ format({ value }) }}</template>
  </ResultBox>
</template>
