<script setup lang="ts">
const format = (payload: object): object =>
  Object.fromEntries(
    Object.entries(payload).map(([key, item]) => {
      if (typeof item === "function") return [key, `[Function: ${item.name}]`];
      return [key, item];
    })
  );
</script>

<template>
  <details>
    <summary>Demo</summary>
    <div class="box">
      <slot></slot>
      <details>
        <summary>Debug</summary>
        <pre align="left"><slot name="debug" :format="format"></slot></pre>
      </details>
    </div>
  </details>
</template>

<style scoped>
.box {
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid currentColor;
}

.box:deep(> *) {
  padding: 4px 0px;
}

.box:deep(label) {
  padding: 8px;
  margin: 8px 0px;
}

.box:deep(input),
.box:deep(select),
.box:deep(button) {
  border: 1px solid currentColor;
  border-radius: 4px;
  padding: 0px 8px;
}
.box:deep(button) {
  margin-left: 8px;
  color: red;
  border: 1px solid currentColor;
  padding: 0px 8px;
}
</style>
