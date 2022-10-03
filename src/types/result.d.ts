interface IResResult {
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
}

interface PartnerModel {
  partnerId: number;
  partnerName: string;
  partnerTitle: string;
  partnerImg: string;
}
