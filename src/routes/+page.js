import { projects } from '$lib/stores.js';
import { loadProjects } from '../lib/requests';

export async function load() {
    projects.set(await loadProjects());
}
