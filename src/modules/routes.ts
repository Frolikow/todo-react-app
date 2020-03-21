import { routes as profileRoutes } from './Profile/routes';
import { routes as todoRoutes } from './Todo/routes';

export const routes = {
  ...profileRoutes,
  ...todoRoutes,
};
