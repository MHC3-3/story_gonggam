import endpoint from './endpoint';

const getTest = async (): Promise<any> => {
  const response = await endpoint.get('/api/template');
  const { data } = response;
  return data;
};

export { getTest };
