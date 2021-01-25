import client from "./client";
import qs from "../../../node_modules/qs";

export const writePost = ({ title, body, tags }) => client.post('/api/post', { title, body, tags });
export const readPost = id => client.get(`/api/post/${id}`);
export const listPost = ({ username, page, tag }) => client.get(`/api/post?${qs.stringify({ page, username, tag })}`);