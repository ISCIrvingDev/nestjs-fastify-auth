import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
// import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.URL_MONGODB),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      debug: false,
    }),
    UsersModule,
  ],
  // controllers: [],
  providers: [AppService, AppResolver],
})
export class AppModule {}
