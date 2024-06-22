import { Module } from '@nestjs/common';
import { ControlModule } from './modules/control/control.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    DatabaseModule,
    UsuarioModule,
    ControlModule
  ]
})
export class AppModule {}
