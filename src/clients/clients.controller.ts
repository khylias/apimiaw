import { Body, Controller, Get, Post } from '@nestjs/common';
import { Clients } from 'src/providers/clients';

@Controller('clients')
export class ClientsController {

    constructor(private clientsProvider: Clients) {

    }

    @Post()
    create(@Body() payload) {
        return this.clientsProvider.create(payload);
    }
    
    @Get()
    getAll() {
        return this.clientsProvider.findAll();
    }
}
