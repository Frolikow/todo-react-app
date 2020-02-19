import { routes as searchRoutes } from './Search/routes';
import { routes as profileRoutes } from './Profile/routes';
import { routes as todoRoutes } from './Todo/routes';

export const routes = {
  ...searchRoutes,
  ...profileRoutes,
  ...todoRoutes,
};
