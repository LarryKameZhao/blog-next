import { createConnection, getConnectionManager } from 'typeorm';
const promise = (async function () {
  const manager = getConnectionManager();
  if (!manager.has('default')) {
    console.log('init connection');
    return createConnection();
  } else {
    console.log('reuse connection');
    const current = manager.get('default');
    if (current.isConnected) {
      return current;
    } else {
      return createConnection();
    }
  }
})();
const getDataBaseConnection = () => {
  return promise;
};
export { getDataBaseConnection };
