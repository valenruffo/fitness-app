import { Module } from '@nestjs/common';
import { ExercisesModule } from './exercises/exercises.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ExercisesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
