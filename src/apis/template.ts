import { template } from '@/types/campaign';
import { IgetResult } from '@/types/result';
import { GetServerSideProps } from 'next';
import endpoint from './endpoint';

const getStory = async (): Promise<template[]> => {
  try {
    const response = await endpoint.get('/api/template');
    const { data } = response;
    return data.result;
  } catch (error) {
    throw new Error('API template error');
  }
};
const getResult = async (id: string | string[] | undefined): Promise<IgetResult> => {
  try {
    const response = await endpoint.get(`/api/result?code=${id}`);
    const { data } = response;
    return data.result;
  } catch (error) {
    throw new Error('API result error');
  }
};

export { getStory, getResult };
