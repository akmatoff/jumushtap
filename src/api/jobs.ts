import baseApi from "./baseApi";
import { type BaseResponse } from "./config";
import { type IJob } from "@/types/job";

export interface JobsRequestParams {
  search?: string;
  location?: string;
}

export async function getJobs(params?: JobsRequestParams) {
  return baseApi
    .get<BaseResponse<IJob>>("/jobs", { params })
    .then(({ data }) => data);
}
