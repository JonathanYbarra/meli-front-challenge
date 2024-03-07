declare global {
  interface Window {
    _env_: { [key: string]: any };
  }
}
interface AppConfig {
  apiUrl?: string;
}

export const config: AppConfig = {
  apiUrl: import.meta.env.VITE_APP_API_BASE,
} as const;
