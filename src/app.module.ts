import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvestimentModule } from './investiment/investiment.module';

@Module({
  imports: [InvestimentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
