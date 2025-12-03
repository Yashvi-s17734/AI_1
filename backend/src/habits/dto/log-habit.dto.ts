import { IsNotEmpty, IsString, IsOptional } from "class-validator";

export class LogHabitDto {
  @IsString()
  @IsNotEmpty()
  habitId: string;

  @IsOptional()
  date?: string;  
}
