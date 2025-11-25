// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";
import edgeoneAdapter from "@edgeone/astro";

// https://astro.build/config
export default defineConfig({
  adapter: edgeoneAdapter(),
  integrations: [icon()],
  prefetch: true,
});
