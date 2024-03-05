declare global {
  interface Window {
    _env_: { [key: string]: any };
  }
}
interface AppConfig {
  apiUrl?: string;
}
console.log(
  "🚀 AppConfig.import.meta.env.VITE_APP_API_BASE:",
  import.meta.env.VITE_APP_API_BASE
);

export const config: AppConfig = {
  apiUrl: import.meta.env.VITE_APP_API_BASE,
} as const;
