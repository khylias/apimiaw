import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './clients/clients.controller';
import { Clients } from './providers/clients';

import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [AuthenticationModule, UsersModule],
    controllers: [AppController, ClientsController],
    providers: [AppService, Clients],
})
export class AppModule { }
