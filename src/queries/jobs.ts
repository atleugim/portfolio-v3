import type { Lang } from '~/i18n/utils';
import type { Job } from '~/types/job';

export const getJobs = async (lang?: Lang): Promise<Job[] | undefined> => {
  try {
    const path = lang === 'es' ? 'es/' : '';
    const res = await fetch(
      `https://raw.githubusercontent.com/atleugim/public/develop/json/${path}jobs.json`
    );
    return await res.json();
  } catch (err) {
    console.error('Error fetching jobs:', err);
    return undefined;
  }
};
