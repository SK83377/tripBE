import { RoutesStation } from '../models/routesStation.entity';
import { ROUTES_STATION_REPOSITORY } from '../../constants';


export const RoutesStationsProviders = [
  {
    provide: ROUTES_STATION_REPOSITORY,
    useValue: RoutesStation,
  },
];