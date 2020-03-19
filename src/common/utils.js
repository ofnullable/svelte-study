import { TOKENS } from './consts';

export const getToken = symbol => TOKENS.find(token => token.symbol === symbol);

export const isBlank = str => !str?.trim();

export const isEmtpyObject = obj => (obj ? !Object.keys(obj).length : true);
