import client from './client';

export const write = ({ title, content }) => client.post('/api/board', { title, content });

export const read = id => client.get(`/api/board/${id}`);