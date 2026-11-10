import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  // Caminhos relativos: funciona em GitHub Pages (raiz ou /nome-do-repo/)
  base: "./",
  build: {
    // Embute TODAS as imagens (data URI) dentro do HTML final:
    // o site vira um único arquivo autocontido, sem dependências externas.
    assetsInlineLimit: 1024 * 1024 * 10, // 10 MB
    cssCodeSplit: false,
  },
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
