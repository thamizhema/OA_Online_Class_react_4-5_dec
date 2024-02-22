import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import { options } from "marked";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mdPlugin(options)],
});
