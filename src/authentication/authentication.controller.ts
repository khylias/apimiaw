import { Body, Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';

import { AuthLocalGuard } from 'src/guards/auth-local.guard';
import { UserDto } from 'src/models/user.model';
import { AuthenticationService } from 'src/providers/authentication';
import { UserService } from 'src/providers/user';

@Controller('auth')
export class AuthenticationController {

    constructor(private authService: AuthenticationService, private userService: UserService) { }

    @UseGuards(AuthLocalGuard)
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Post('signup')
    @HttpCode(201)
    async signup(@Body() body: UserDto) {
        if(body.password === body.passwordConfirm) {
            return this.userService.create(body);
        }
        return false;
    }

}
