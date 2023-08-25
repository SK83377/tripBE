import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TripModule } from './core/modules/trip/trip.module';

@Module({
  imports: [
    TripModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    })
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}