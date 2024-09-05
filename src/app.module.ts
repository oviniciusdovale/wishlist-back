import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-sa-east-1.pooler.supabase.com',
      port: 6543,
      username: 'postgres.sczqutwagujgbroddydr',
      password: 'BBFkmck8JGBy152C',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
