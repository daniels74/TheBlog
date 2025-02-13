import { Module } from '@nestjs/common';
import { UserService } from './Service/user.service';
import { UserController } from './Controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';

@Module({
  //! Links the userEntity to the database
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
