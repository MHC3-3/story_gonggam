import { template } from '@/types/campaign';
import { IgetResult } from '@/types/result';
import endpoint from './endpoint';

const getStory = async () => {
  try {
    const response = await endpoint.get(`/api/template`);
    const data = response.data.result;
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};
// const getStory = async (): Promise<template[]> => {
//   try {
//     const response = await endpoint.get('/api/template');
//     const { data } = response;
//     return data.result;
//   } catch (error) {
//     throw new Error('API template error');
//   }
// };

const getResult = async (id: string | string[] | undefined) => {
  try {
    const response = await endpoint.get(`/api/result?code=${id}`);
    const data = response.data.result;
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
};
// const getResult = async (id: string | string[] | undefined): Promise<IgetResult> => {
//   try {
//     const response = await endpoint.get(`/api/result?code=${id}`);
//     const { data } = response;
//     return data.result;
//   } catch (error) {
//     throw new Error('API result error');
//   }
// };

export { getStory, getResult };
