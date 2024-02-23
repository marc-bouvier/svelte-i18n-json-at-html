import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		prerender: {
			handleMissingId: 'ignore'
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/rezofora' : ''
		},
		alias: {
			'$iroco-ui': 'node_modules/@iroco/ui/dist'
		}
	}
};

export default config;
