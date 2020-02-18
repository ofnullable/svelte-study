import { writable } from 'svelte/store';

export let menuVisible = writable(false);

export const toggleVisible = () => {
  menuVisible.update(prev => !prev);
};
