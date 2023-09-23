import { RoutesTrip } from '../models/routesTrip.entity';
import { ROUTES_TRIP_REPOSITORY } from '../../constants';


export const RoutesTripsProviders = [
  {
    provide: ROUTES_TRIP_REPOSITORY,
    useValue: RoutesTrip,
  },
];