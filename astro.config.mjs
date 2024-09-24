// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://fujibayashi-ast.github.io/sample-sg/',
	integrations: [mdx(), sitemap()],
	base: '/sample-sg',
	output: 'static'
});
