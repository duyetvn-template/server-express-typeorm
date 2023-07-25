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
  @IsString()
  username: string
}

export class LoginDTO {
  accessToken?: string
  user?: User
}
