import { browser } from '$app/environment';

export type Mode = 'NORMAL' | 'INSERT' | 'VISUAL';

let mode = $state<Mode>('NORMAL');

export function getMode(): Mode {
	return mode;
}

export function setMode(newMode: Mode): void {
	mode = newMode;

	if (browser) {
		const root = document.querySelector(':root');

		if (!root) {
			return;
		}
		switch (newMode) {
			case 'NORMAL': {
				// @ts-expect-error
				root.style.setProperty('--mode-color', 'rgb(var(--ctp-blue))');
				break;
			}
			case 'INSERT': {
				// @ts-expect-error
				root.style.setProperty('--mode-color', 'rgb(var(--ctp-green))');
				break;
			}
			case 'VISUAL': {
				// @ts-expect-error
				root.style.setProperty('--mode-color', 'rgb(var(--ctp-mauve))');
				break;
			}
		}
	}
}
