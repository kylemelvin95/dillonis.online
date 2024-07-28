<script lang="ts">
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { type Snippet } from 'svelte';
	import '../app.css';
	import StatusLine from './status-line.svelte';
	import SignColumn from './sign-column.svelte';
	let { children }: { children: Snippet } = $props();

	injectSpeedInsights();
</script>

<div class="w-screen h-screen bg-ctp-base flex flex-col text-ctp-subtext0 justify-between overflow-auto">
  <div class="flex flex-row gap-4 grow">
    <SignColumn />
    {@render children()}
  </div>
  <StatusLine />
</div>
