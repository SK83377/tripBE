import { Station } from '../models/station.entity';
import { STATION_REPOSITORY } from '../../constants';


export const StationsProviders = [
  {
    provide: STATION_REPOSITORY,
    useValue: Station,
  },
];