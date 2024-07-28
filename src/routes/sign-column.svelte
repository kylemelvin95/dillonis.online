<script lang="ts">
	import { onMount } from 'svelte';

	let signColumn: HTMLDivElement;
	let tildes = $state<string>();

  function generateTildes() {
		const { height } = signColumn.getBoundingClientRect();

		tildes = '~\n'.repeat(Math.round(height / 22));
  }

	onMount(() => {
    generateTildes();
	});

</script>

<div
	bind:this={signColumn}
  onresize={generateTildes}
	class="max-w-[44px] h-full w-[22px] pl-1 text-right 
  leading-[22px] text-wrap"
>
	{tildes}
</div>
