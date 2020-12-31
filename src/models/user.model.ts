import { IsEmail, IsNotEmpty, Min, MinLength } from "class-validator";

export interface User {
    email: string;
    username: string;
    id: string;
    password?: string;
}

export class UserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @MinLength(8)
    password: string;
    
    @IsNotEmpty()
    @MinLength(8)
    passwordConfirm: string;
}