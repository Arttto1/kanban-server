import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Arttto:Apn13182126%23@graphqlproject.ktj3w.mongodb.net/?retryWrites=true&w=majority&appName=GraphQlProject'),
  ],
})
export class DatabaseModule {}