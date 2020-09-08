import { createConnection, getConnectionManager } from 'typeorm';
import 'reflect-metadata';
import { Post } from 'src/entity/Post';
import { User } from 'src/entity/User';
import { Comment as comments } from 'src/entity/Comment';
import config from 'ormconfig.json';
const create = async () => {
  // @ts-ignore
  return createConnection({
    ...config,
    entities: [Post, User, comments],
  });
};
const promise = (async function () {
  const manager = getConnectionManager();
  const current = manager.has('default') && manager.get('default');
  if (current) {
    await current.close();
  }
  return create();
})();
const getDataBaseConnection = () => {
  return promise;
};
export { getDataBaseConnection };
