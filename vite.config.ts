import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { sitemapPlugin } from 'sveltekit-sitemap/dist/plugin';

export default defineConfig({
	plugins: [
		sveltekit(),
		sitemapPlugin({ routesDir: './src/routes', sitemapFile: './src/sitemap.ts' })
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
