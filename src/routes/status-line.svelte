<script lang="ts">
	import Html5Logo from './html5-logo.svelte';
  import { getMode } from './mode.svelte';
</script>

<div id="status-line" class="bg-ctp-mantle w-full flex flex-row">
	<span class="h-full px-2 font-bold bg-mode-color text-ctp-mantle">{getMode()}</span><span class="pl-2"
		>~/index.html</span
	>
	<span class="grow"></span>
	<span class="flex flex-row justify-end pr-4 gap-2"><Html5Logo size="22px" />html</span>
	<span class="pl-7 pr-3 bg-[#313346] text-mode-color">Top</span>
	<span class="pl-10 pr-3 bg-mode-color text-ctp-crust">1:1</span>
</div>
