import axios from 'axios';
import { SCORE_URL, SERVER_URL } from '../common/consts';

export const scoreInstance = axios.create({ baseURL: SCORE_URL });

export const serverInstance = axios.create({ baseURL: SERVER_URL, withCredentials: true });