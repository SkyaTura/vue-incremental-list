<script setup lang="ts">
import { useIncrementalList } from "../index";
import ResultBox from "../ResultBox.vue";

interface Example {
  value: string;
}

const model = (): Example => ({ value: "" });

const list = useIncrementalList<Example>({
  model,
  initialValue: [{ value: "Hello" }, { value: "World" }],
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
    <template #debug="{ format }">{{ format(list) }}</template>
  </ResultBox>
</template>
