import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const env = loadEnv(mode, process.cwd());
  const baseUrl = env.VITE_BASE_URL;
  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: baseUrl,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});
