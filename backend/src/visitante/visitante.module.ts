import { Module } from '@nestjs/common';
import { VisitanteController } from './visitante.controller';
import { VisitanteService } from './visitante.service';

@Module({
  controllers: [VisitanteController],
  providers: [VisitanteService]
})
export class VisitanteModule {}
