export interface IResResult {
  isSuccess: boolean;
  code: number;
  message: string;
  result: Result;
}

export interface IgetResult {
  id: number;
  name: string;
  title: string;
  description: string;
  resultToryImg: string;
  partnerModel: PartnerModel;
  count: number;
}

interface PartnerModel {
  partnerId: number;
  partnerName: string;
  partnerTitle: string;
  partnerImg: string;
}

export interface IResResultAll {
  isSuccess: boolean;
  code: number;
  message: string;
  result: Result;
}

interface resultAll {
  code: sting;
}

export interface IApply {
  name: string;
  phoneNumber: string;
  answer: string;
}

export interface IResApply {
  isSuccess: boolean;
  code: number;
  message: string;
}
