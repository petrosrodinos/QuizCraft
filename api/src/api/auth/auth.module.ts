import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserSchema } from 'src/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateJwtServiceModule } from './jwt/jwt.module';
import { JwtStrategy, LooseJwtStrategy } from './strategy';

@Module({
  imports: [
    CreateJwtServiceModule,
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LooseJwtStrategy],
})
export class AuthModule {}