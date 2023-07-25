import {
  IsNumber,
  IsEmail,
  IsString,
  IsOptional,
  IsEnum,
  IsArray,
  ArrayNotEmpty,
} from 'class-validator'
import { UserStatus } from '../../../common/enums.enum'

export class User {
  @IsNumber()
  id: number

  @IsEmail()
  email: string

  @IsString()
  name: string

  @IsOptional()
  @IsEnum(UserStatus)
  status?: UserStatus

  @IsArray()
  @ArrayNotEmpty()
  phoneNumbers: string[]
}


export class LoginDTO {
  accessToken: string;
  user: User;
}
