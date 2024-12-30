import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class ExercisesService {
  constructor(private prismaService: PrismaService) {}

  async create(createExerciseDto: CreateExerciseDto) {
    try {
      return await this.prismaService.exercise.create({
        data: createExerciseDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException('Exercise already exists');
        }
      }
      throw new InternalServerErrorException();
    }
  }

  findAll() {
    return this.prismaService.exercise.findMany();
  }

  async findOne(id: number) {
    const exerciseFound = await this.prismaService.exercise.findUnique({
      where: { id },
    });
    if (!exerciseFound) {
      throw new NotFoundException(`Exercise with id ${id} not found`);
    }
    return exerciseFound;
  }

  async update(id: number, updateExerciseDto: UpdateExerciseDto) {
    const updatedExercise = await this.prismaService.exercise.update({
      where: { id },
      data: updateExerciseDto,
    });
    if (!updatedExercise) {
      throw new NotFoundException(`Exercise with id ${id} not found`);
    }
    return updatedExercise;
  }

  async remove(id: number) {
    const deletedExercise = await this.prismaService.exercise.delete({
      where: { id },
    });
    if (!deletedExercise) {
      throw new NotFoundException(`Exercise with id ${id} not found`);
    }
    return deletedExercise;
  }
}
