import { Module } from '@nestjs/common';
import { DeporteController } from './deporte.controller';
import { DeporteService } from './deporte.service';

@Module({
  controllers: [DeporteController],
  providers: [DeporteService]
})
export class DeporteModule {}
