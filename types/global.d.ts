declare global {
	const __APP_INFO__: {
    pkg: {
      name: string;
      version: string;
      dependencies: Recordable<string>;
      devDependencies: Recordable<string>;
    };
    lastBuildTime: string;
  };

	type Recordable<T = any> = Record<string, T>;

	interface ViteEnv {
		VITE_GLOB_APP_TITLE: string;
		VITE_PORT: number;
		VITE_PROXY: [string, string][];
  }
}

export {};