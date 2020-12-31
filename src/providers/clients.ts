import { Injectable } from '@nestjs/common';

@Injectable()
export class Clients {

    private readonly clients = [];

    create(client) {
        this.clients.push(client);
        return client;
    }

    findAll() {
        return this.clients;
    }
}
