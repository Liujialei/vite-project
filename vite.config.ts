import { defineConfig,loadEnv } from 'vite'
import dayjs from 'dayjs'
import pkg from './package.json'
import vue from '@vitejs/plugin-vue'
import { wrapperEnv } from './build/utils';

 
import { resolve } from 'path'

//添加element UI Plus 添加按需自动引入组件库
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const { dependencies, devDependencies, name, version } = pkg;

const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const root = process.cwd();
	const env = loadEnv(mode, root)
	console.log('env',env);
	
	const viteEnv = wrapperEnv(env)
	const { VITE_PORT } = viteEnv

  return {
    // vite config
    define: {
     __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
		base:'./',
		root,
		resolve:{
			alias: {
				'@':resolve(__dirname, './src'),
				'@assets': resolve(__dirname, 'src/assets'),
				'@components': resolve(__dirname, 'src/components'),
				'@types': resolve(__dirname, 'src/types'),
				'#': resolve(__dirname, 'types')
			}
		},
		server: {
			// https: true,
			// Listening on all local IPs
			host: true,
			port: VITE_PORT,
			// // Load proxy configuration from .env
			// proxy: createProxy(VITE_PROXY),
		},
		plugins: [
			vue(),
			AutoImport({
				resolvers: [ElementPlusResolver()],
			}),
			Components({
				resolvers: [ElementPlusResolver()],
			})
		]
  }
})
