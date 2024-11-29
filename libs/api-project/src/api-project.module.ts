import { Module } from '@nestjs/common';
import { ProjectController } from './controller/project/project.controller';

@Module({
  controllers: [ProjectController],
  providers: [],
  exports: [],
})
export class ApiProjectModule {}
