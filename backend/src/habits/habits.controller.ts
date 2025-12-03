import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { HabitsService } from './habits.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { LogHabitDto } from './dto/log-habit.dto';
import { DateRangeDto } from './dto/date-range.dto';

@Controller('habits')
export class HabitsController {
  constructor(private habitService: HabitsService) {}

  // CREATE HABIT
  @Post()
  createHabit(@Body() body: CreateHabitDto) {
    return this.habitService.createHabit(body);
  }

  // LOG HABIT
  @Post('log')
  logHabit(@Body() body: LogHabitDto) {
    return this.habitService.logHabit(body.habitId, body.date);
  }

  // GET LOGS
  @Get('logs')
  getLogs(@Query('habitId') habitId: string, @Query() range: DateRangeDto) {
    return this.habitService.getHabitLogs(habitId, range.start, range.end);
  }

  // STREAK
  @Get('streak')
  getStreak(@Query('habitId') habitId: string) {
    return this.habitService.getStreak(habitId);
  }
  @Post('reminder')
  updateReminder(@Body() body) {
    return this.habitService.updateReminder(body);
  }
}
