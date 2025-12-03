import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { startOfToday, isSameDay, subDays } from 'date-fns';

@Injectable()
export class HabitsService {
  constructor(private prisma: PrismaService) {}

  // CREATE HABIT
  createHabit(data: any) {
    return this.prisma.habit.create({ data });
  }

  // LOG A HABIT (today or given date)
  async logHabit(habitId: string, date?: string) {
    return this.prisma.habitLog.create({
      data: {
        habitId,
        date: date ? new Date(date) : new Date(),
      },
    });
  }

  // GET HABIT LOGS IN A DATE RANGE
  getHabitLogs(habitId: string, start: string, end: string) {
    return this.prisma.habitLog.findMany({
      where: {
        habitId,
        date: {
          gte: new Date(start),
          lte: new Date(end),
        },
      },
      orderBy: { date: 'asc' },
    });
  }

  // GET CURRENT STREAK
  async getStreak(habitId: string) {
    const logs = await this.prisma.habitLog.findMany({
      where: { habitId },
      orderBy: { date: 'desc' },
    });

    let streak = 0;
    let expected = startOfToday();

    for (const log of logs) {
      if (isSameDay(log.date, expected)) {
        streak++;
        expected = subDays(expected, 1);
      } else {
        break;
      }
    }

    return { streak };
  }
  async updateReminder(data) {
    return this.prisma.habit.update({
      where: { id: data.habitId },
      data: {
        reminderTime: data.reminderTime,
        reminderDays: data.reminderDays,
        isReminderOn: data.isReminderOn,
      },
    });
  }
}
