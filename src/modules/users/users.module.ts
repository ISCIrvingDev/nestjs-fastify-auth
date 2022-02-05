import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersEntity, UsersSchema } from './users.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UsersEntity.name,
        schema: UsersSchema,
      },
    ]),
  ],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
