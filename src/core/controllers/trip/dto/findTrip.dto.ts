import {
    IsString,
    Length,
    IsNumberString,
    IsNotEmpty,
  } from 'class-validator';
  
  export class FindTripDto {
    @IsNotEmpty()
    @IsNumberString()
    @Length(8, 12)
    phone: string;
  
    @IsNotEmpty()
    @IsString()
    @Length(8, 8)
    code: string;
  }
  
  export default FindTripDto;