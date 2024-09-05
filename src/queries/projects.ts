import type { Lang } from '~/i18n/utils';
import type { Project } from '~/types/project';

export const getProjects = async (
  lang?: Lang
): Promise<Project[] | undefined> => {
  try {
    const path = lang === 'es' ? 'es/' : '';
    const res = await fetch(
      `https://raw.githubusercontent.com/atleugim/public/develop/json/${path}projects.json`
    );
    return await res.json();
  } catch (err) {
    console.error('Error fetching projects:', err);
    return undefined;
  }
};
