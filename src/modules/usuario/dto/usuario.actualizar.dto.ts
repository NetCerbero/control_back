import { IsDefined, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class UsuarioActualizarDto{
    
    @IsInt()
    @IsOptional()
    readonly id?: number

    @IsDefined()
    @IsString()
    @IsOptional()
    @MaxLength(255)
    readonly user?:string;

    @IsDefined()
    @IsString()
    @MaxLength(255)
    @MinLength(8)
    @IsOptional()
    readonly password?:string;
}