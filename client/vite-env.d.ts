/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEB_SOCKET_URL: string;
  // 필요한 다른 환경 변수도 여기에 추가하세요.
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}