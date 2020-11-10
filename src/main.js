import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		headline: 'Svelte, TailwindCss & Capacitor'
	}
});

export default app;
