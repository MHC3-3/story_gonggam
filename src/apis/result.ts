import { IApply, IResApply } from '@/types/result';
import endpoint from './endpoint';

const CampaignApply = async (
  params: IApply,
  env = process.env.NEXT_PUBLIC_COUNTUP,
): Promise<IResApply> => {
  const responese = await endpoint.post(`/api/event?env=` + env, params);
  const { data } = responese;
  return data;
};

export { CampaignApply };
