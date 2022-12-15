import { defineConfig } from 'astro/config';

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [react()],
  renderers : [ 
    '@astrojs/renderer-preact' 
  ] 
});