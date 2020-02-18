import { writable } from 'svelte/store';
import { TOKENS } from '../common/consts';

export let tokens = writable(TOKENS);

export let token = writable(TOKENS[0]);
