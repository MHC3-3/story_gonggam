import { template } from '@/types/campaign';
import endpoint from './endpoint';

const getTest = async (): Promise<template[]> => {
  try {
    const response = await endpoint.get('/api/template');
    const { data } = response;
    return data.result;
  } catch (error) {
    throw new Error('API template error');
  }
};

export { getTest };
