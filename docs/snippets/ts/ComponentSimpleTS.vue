<script setup lang="ts">
import { ref } from "vue";
import { useIncrementalListComponent } from "../index";
import ResultBox from "../ResultBox.vue";

interface Example {
  value: string;
}

const model = (): Example => ({ value: "" });
const value = ref<Example[]>([]);

const ExampleList = useIncrementalListComponent<Example>(model);
</script>

<template>
  <ResultBox>
    <ExampleList v-model="value">
      <template #item="{ item, isNew, remove, clearEmpty }">
        <div>
          <label>
            <input v-model="item.value" @blur="clearEmpty()" />
          </label>
          <button tabindex="-1" v-if="!isNew" @click="remove()">Remove</button>
        </div>
      </template>
    </ExampleList>
    <template #debug="{ format }">{{ format(value) }}</template>
  </ResultBox>
</template>
