import type { Project } from '~/types/project';

export const getProjects = async (): Promise<Project[] | undefined> => {
  try {
    const res = await fetch(
      'https://raw.githubusercontent.com/atleugim/public/develop/json/projects.json'
    );
    return await res.json();
  } catch (err) {
    console.error('Error fetching projects:', err);
    return undefined;
  }
};
