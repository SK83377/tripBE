import { StationsConnection } from '../models/stationsConnection.entity';
import { STATIONS_CONNECTION_REPOSITORY } from '../../constants';


export const StationsConnectionsProviders = [
  {
    provide: STATIONS_CONNECTION_REPOSITORY,
    useValue: StationsConnection,
  },
];