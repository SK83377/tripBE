import { Zone } from '../models/zone.entity';
import { ZONE_REPOSITORY } from '../../constants';


export const ZoneProviders = [
  {
    provide: ZONE_REPOSITORY,
    useValue: Zone,
  },
];