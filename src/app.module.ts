import { Module } from '@nestjs/common';
import { ControlModule } from './modules/control/control.module';
import { UsuarioModule } from './modules/usuario/usuario.module';

@Module({
  imports: [UsuarioModule, ControlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
