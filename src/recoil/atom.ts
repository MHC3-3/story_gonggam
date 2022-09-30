import { template } from 'types/campaign';
import { atom, selector } from 'recoil';

export const storyArrayAtom = atom<template[]>({
  key: 'storyArray',
  default: [],
});

export const storyCurAtom = atom({
  key: 'storyCurrent',
  default: 0,
});
