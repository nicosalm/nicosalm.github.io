import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://varrix.dev',
	// base: '/my-repo',
	integrations: [mdx(), tailwind()],
});
