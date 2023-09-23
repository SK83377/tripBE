import { Controller, Get, Post, Request, Body, Response } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TripService } from 'src/core/services/trip/trip.service';
import FindTripDto from './dto/findTrip.dto';

@Controller('trip')
export class TripController {
    constructor(
        private readonly configService: ConfigService,
        private readonly tripService: TripService
    ) {}
    @Get('findTrip')
    async findTrip(@Body() registrationData: FindTripDto, @Response() res) {

    }
}