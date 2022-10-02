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

export const storyResultAtom = atom({
  key: 'storyResult',
  default: '',
});
