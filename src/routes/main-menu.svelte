<script lang="ts">
	import Ascii from './ascii.svelte';
	import {
		Github,
		LinkedinIcon,
		MailPlusIcon,
		MicVocalIcon,
		TwitchIcon,
		TwitterIcon,
		YoutubeIcon
	} from 'lucide-svelte';
</script>

<main class="flex flex-col mx-auto mt-16 gap-5 items-center">
	<Ascii />
	<p class="text-center font-semibold text-3xl">software engineer @ vercel</p>
	<ul class="flex flex-col w-1/2 gap-2 mt-8">
		<li class="flex flex-row gap-2 items-center justify-between">
			<span class="flex flex-row gap-4"><Github />GitHub</span>ggh
		</li>
		<li class="flex flex-row gap-2 items-center justify-between">
			<span class="flex flex-row gap-4"><TwitterIcon />Twitter/𝕏</span>gx
		</li>
		<li
			class="p-1 cursor-none hover:cursor-pointer flex flex-row gap-2 items-center justify-between hover:bg-[#313346] hover:text-[#6441a5]"
		>
			<span class="flex flex-row gap-4 items-center"
				><TwitchIcon /><span class="text-ctp-subtext0">Twitch</span></span
			>gt
		</li>
		<li class="flex flex-row gap-2 items-center justify-between">
			<span class="flex flex-row gap-4"><YoutubeIcon />YoutTube</span>gyt
		</li>
		<li class="flex flex-row gap-2 items-center justify-between">
			<span class="flex flex-row gap-4"><LinkedinIcon />LinkedIn</span>gli
		</li>
		<li class="flex flex-row gap-2 items-center justify-between">
			<span class="flex flex-row gap-4"><MicVocalIcon />Conference Talks</span>gct
		</li>
		<li class="flex flex-row gap-2 items-center justify-between">
			<span class="flex flex-row gap-4"><MailPlusIcon />Contact Me</span>gcm
		</li>
	</ul>
</main>
