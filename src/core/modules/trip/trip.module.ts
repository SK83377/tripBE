import { Module } from '@nestjs/common';
import { TripController } from 'src/core/controllers/trip/trip.controller';
import { TripService } from 'src/core/services/trip/trip.service';

@Module({
    imports: [
        
    ],
    controllers: [TripController],
    providers: [TripService],
    exports: []

})
export class TripModule {}
