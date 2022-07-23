<template>
	<div>
		<el-input v-model="massage" placeholder=""></el-input>
	</div>
</template>

<script setup lang="ts">
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'
import { ref} from 'vue'
const massage = ref(null)



</script>

<style scoped>
</style>
