import { PathRoutes } from '../types/routes';

export function clearParam(url: PathRoutes) {
  const arr = url.split('/');
  arr.pop();
  return arr.join('/');
}
