import { IsDefined, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class UsuarioCrearDto{
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    user:string;

    @IsDefined()
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    @MinLength(8)
    password:string;
}