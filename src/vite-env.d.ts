interface ImportMetaEnv {
    readonly VITE_APP_PUBLIC_POSTHOG_KEY: string;
    readonly VITE_APP_PUBLIC_POSTHOG_HOST: string;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}