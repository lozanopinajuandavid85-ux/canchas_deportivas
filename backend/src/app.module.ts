import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DeporteModule } from './deporte/deporte.module';
import { CanchaModule } from './cancha/cancha.module';
import { HorarioModule } from './horario/horario.module';
import { VisitanteModule } from './visitante/visitante.module';
import { ReservaModule } from './reserva/reserva.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Lee .env automáticamente
    PrismaModule, DeporteModule, CanchaModule, HorarioModule, VisitanteModule, ReservaModule,                             // Conexión a la BD
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}