import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExercisesModule } from './api/exercises/exercises.module';
import { BodyPartsModule } from './api/body_parts/body_parts.module';
import { MuscularGroupsModule } from './api/muscular_groups/muscular_groups.module';
import { UserModule } from './api/user/user.module';
import { AuthService } from './services/auth/auth.service';
import { AuthModule } from './services/auth/auth.module';

@Module({
  imports: [
    ExercisesModule,
    BodyPartsModule,
    MuscularGroupsModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
