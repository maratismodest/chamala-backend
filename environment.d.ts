export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POSTGRES_HOST: string;
      POSTGRES_PORT: string;
      POSTGRES_USER: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_DB: string;
      PORT: string;
      SERVER_DOMAIN_URL: string;
      NODE_ENV: string;
      PRIVATE_KEY: string;
    }
  }
}