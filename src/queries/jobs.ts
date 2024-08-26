import type { Job } from '~/types/job';

export const getJobs = async (): Promise<Job[] | undefined> => {
  try {
    const res = await fetch(
      'https://raw.githubusercontent.com/atleugim/public/develop/json/jobs.json'
    );
    return await res.json();
  } catch (err) {
    console.error('Error fetching jobs:', err);
    return undefined;
  }
};
