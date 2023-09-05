/// <reference types="vite/client" />
//
interface ImportMetaEnv {
  readonly VITE_API_URL_RU: string;
  readonly VITE_API_URL_GLOBAL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
