import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: { external: ["solid-js"] },
    target: "esnext",
    lib: {
      entry: "./src/lib/index.ts",
      name: "bifrostSolidLib",
      fileName: "bifrost-solid-lib",
      formats: ["es", "umd"],
    },
  },
});
