import { writable } from 'svelte/store';
import { TOKENS } from '../common/consts';

export let token = writable(TOKENS[0]);

export const tokens = writable(TOKENS);

