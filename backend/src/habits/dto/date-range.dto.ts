import { IsString } from "class-validator";

export class DateRangeDto {
  @IsString()
  start: string;

  @IsString()
  end: string;
}
