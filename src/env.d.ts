/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PLAUSIBLE_DOMAIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
