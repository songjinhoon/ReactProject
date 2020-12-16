import client from './client';

export const login = async ({username, password}) => client.post('/api/auth/login', {username, password});
export const register = async ({username, password}) => client.post('/api/auth/register', {username, password});
export const check = () => client.get('/api/auth/check');