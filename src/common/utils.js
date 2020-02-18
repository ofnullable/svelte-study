import { TOKENS } from './consts';

export const getToken = symbol => TOKENS.find(token => token.symbol === symbol);
