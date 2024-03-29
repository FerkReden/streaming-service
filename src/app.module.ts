import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import 'dotenv/config';

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URL), UsersModule, AuthModule],
})
export class AppModule {}