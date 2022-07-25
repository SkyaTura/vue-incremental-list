<script setup>
import ComposableInternalTS from '../snippets/ts/ComposableInternalTS.vue'
import ComposableExternalTS from '../snippets/ts/ComposableExternalTS.vue'
import ComponentSimpleTS from '../snippets/ts/ComponentSimpleTS.vue'
import ComponentCustomTS from '../snippets/ts/ComponentCustomTS.vue'
import ComponentNestedTS from '../snippets/ts/ComponentNestedTS.vue'
</script>

# TypeScript usage

[[toc]]

## Composable

### With internal ref list generator

<details>
<summary>Code</summary>

<<< @/snippets/ts/ComposableInternalTS.vue
</details>

<ComposableInternalTS></ComposableInternalTS>

### With externally created ref list

<details>
<summary>Code</summary>

<<< @/snippets/ts/ComposableExternalTS.vue
</details>

<ComposableExternalTS></ComposableExternalTS>

## Component

### Simple usage

<details>
<summary>Code</summary>

<<< @/snippets/ts/ComponentSimpleTS.vue
</details>

<ComponentSimpleTS></ComponentSimpleTS>

### Using different template for new items

<details>
<summary>Code</summary>

<<< @/snippets/ts/ComponentCustomTS.vue
</details>

<ComponentCustomTS></ComponentCustomTS>

### Nested lists

<details>
<summary>Code</summary>

<<< @/snippets/ts/ComponentNestedTS.vue
</details>

<ComponentNestedTS></ComponentNestedTS>

## Extra

### ResultBox

All examples above use this component to facilitate the demo exhibition. For reference, this is it's code:

<details>
<summary>Code</summary>

<<< @/snippets/ResultBox.vue
</details>
