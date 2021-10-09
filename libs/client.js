import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'itollife',
  apiKey: process.env.API_KEY, // envファイルに記述された情報はpublicに公開されない。
});