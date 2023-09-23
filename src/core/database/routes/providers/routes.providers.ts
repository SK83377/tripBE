import { Route } from '../models/route.entity';
import { ROUTE_REPOSITORY } from '../../constants';


export const RoutesProviders = [
  {
    provide: ROUTE_REPOSITORY,
    useValue: Route,
  },
];