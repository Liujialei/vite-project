<script setup lang="ts">
import { ref } from 'vue'
// defineProps<{ msg: string }>()
const count = ref(5)
console.log(count.value)
</script>

<template>
	<el-button type="primary" @click="count++">count is: {{ count }}</el-button>
</template>

<style scoped>
</style>
