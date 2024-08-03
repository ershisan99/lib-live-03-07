import react from "@vitejs/plugin-react-swc";
import { resolve, join } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import { dependencies, devDependencies } from "./package.json";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    target: "esnext",
    minify: false,
    lib: {
      entry: resolve(__dirname, join("src", "index.ts")),
      fileName: "index",
      formats: ["es", "cjs"],
      name: "internship-lib",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        ...Object.keys(devDependencies),
        ...Object.keys(dependencies),
        "react/jsx-runtime",
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
        },
        dir: "dist",
        entryFileNames: "[name].js",
        format: "es",
      },
    },
  },
});
