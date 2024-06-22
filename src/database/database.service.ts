import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvKey } from 'src/config/config.keys';
import { ConnectionOptions } from 'tls';
export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        ssl: false,
        type: 'postgres',
        host: config.get(EnvKey.DATABASE_HOST),
        port: parseInt(config.get(EnvKey.DATABASE_PORT)),
        database: config.get(EnvKey.DATABASE_NAME),
        username: config.get(EnvKey.DATABASE_USER),
        password: config.get(EnvKey.DATABASE_PASSWORD),
        schema: config.get(EnvKey.ENV),
        autoLoadEntities: true,
        synchronize: false,
        entities: [__dirname + '/../*/*/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
      } as ConnectionOptions;
    },
  }),
];