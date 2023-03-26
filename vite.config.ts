import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid()],
  ssr: {
    external: ['youtube-dl-exec', 'fs', 'xml2json', 'xml2js']
  }
});
