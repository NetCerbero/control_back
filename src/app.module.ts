import { Module } from '@nestjs/common';
import { ControlModule } from './modules/control/control.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [UsuarioModule, ControlModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
