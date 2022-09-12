import endpoint from './endpoint';

const getTest = async (): Promise<any> => {
  const response = await endpoint.get('/test/log');
  const { data } = response;
  return data;
};

export { getTest };
