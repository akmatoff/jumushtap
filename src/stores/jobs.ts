import { getJobs, type JobsRequestParams } from "@/api/jobs";
import type { IJob } from "@/types/job";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useJobsStore = defineStore("jobs", () => {
  const jobs = ref<IJob[]>([]);
  const isLoading = ref(false);

  async function getJobsList(params?: JobsRequestParams) {
    isLoading.value = true;
    try {
      const { results } = await getJobs(params);
      jobs.value = results;
    } catch (e) {
      console.error("Failed to fetch");
    } finally {
      isLoading.value = false;
    }
  }

  return {
    jobs,
    isLoading,
    getJobsList,
  };
});
