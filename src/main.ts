import { CoreClient } from './core';
import { Logger } from './util';
import { Api } from './core/Api';

export * from './core';
export * from './util';
export * from './helpers';
export * from './entities';
export * from './sessionHandler';
export * from './cacheManager';
export * from './builders';

const client = new CoreClient();
const logger = new Logger();

const api = new Api();

(async () => {
  await api.connect();
  await api.sendMessage('1234567890@c.us', 'Hello from ZipsterIA!');
})();

logger.log('Initializing Core Client...');
client.connect();
