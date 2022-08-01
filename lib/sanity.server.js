import { createClient } from "next-sanity";
import { config } from "./config";

export const sanityClient = createClient(config);

export const previewClient = createClient({
    ...config,
    useCdn: false,
    token: 'skqkZkMpkB5Fx7pWjurmDFs4tNL29taAdYVA5DTrkfGQx9N2DLFxNJH2jjEAUar3EP97YjqGsTKMv0D97NN7c5INa9QTLmOciEeH0vUqDbgQhng95la6tldoSrWwPS9NRrTUZcl8tGd4fQhATAqCpoTJsggxKfqpi5pm4WziwHzjsEknH600'
});

export const getClient = ( usePreview ) => usePreview ? previewClient : sanityClient;