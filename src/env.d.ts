/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_FORMSPREE_ENDPOINT?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
