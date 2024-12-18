import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ColumnModule } from './kanbanData/column/column.module'; // Módulo de colunas
import { TaskModule } from './kanbanData/task/task.module'; // Módulo de tasks
import { SubtaskModule } from './kanbanData/subtask/subtask.module'; // Módulo de subtasks
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    DatabaseModule,
    ColumnModule,
    TaskModule,
    SubtaskModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Gerar automaticamente o schema GraphQL
      playground: true, // Habilitar o GraphQL Playground
    }),
  ],
})
export class AppModule {}