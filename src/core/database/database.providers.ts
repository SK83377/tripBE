import { Sequelize } from 'sequelize-typescript';
import { Station } from './stations/models/station.entity';
import { Route } from './routes/models/route.entity';
import { RoutesStation } from './routesStations/models/routesStation.entity';
import { RoutesTrip } from './routesTrips/models/routesTrip.entity';
import { StationsConnection } from './stationsConnections/models/stationsConnection.entity';
import { Zone } from './zones/models/zone.entity';
import { env } from 'process';


export const DatabaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: env.DB_HOST,
        port: parseInt(env.DB_PORT),
        username: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        database: env.DATABASE,
      });
      sequelize.addModels([
        Station, 
        Route, 
        RoutesStation,
        RoutesTrip,
        StationsConnection,
        Zone
    ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];