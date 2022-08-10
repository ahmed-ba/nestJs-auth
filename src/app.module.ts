/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';
import { Book, BookSchema } from './schemas/book.schema';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/demo'),  
             MongooseModule.forFeature([{name: Book.name, schema: BookSchema}]), UsersModule, AuthModule],
  controllers: [AppController,BookController],
  providers: [AppService,BookService],
})
export class AppModule {}
