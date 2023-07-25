import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse, Request, Response } from 'tsoa'
import { AuthService } from './auth.service'
import { LoginInput } from './dto/auth.input'
import { LoginDTO } from './dto/auth.dto'

@Route('auth')
export class AuthController extends Controller {
  private readonly service: AuthService

  constructor() {
    super()
    this.service = new AuthService()
  }

  @Post('login')
  public async login(@Body() body: LoginInput): Promise<LoginDTO> {
    return this.service.login(body)
  }

  @Post('refresh-token')
  public async refreshToken(@Body() body: LoginInput): Promise<LoginDTO> {
    return this.service.login(body)
  }

  // @SuccessResponse('201', 'Created') // Custom success response
  // @Post()
  // public async createUser(@Body() requestBody: UserCreationParams): Promise<void> {
  //   this.setStatus(201) // set return status 201
  //   this.service.create(requestBody)
  //   return
  // }

  // @SuccessResponse('201', 'Created') // Custom success response
  // @Post('create-user')
  // public async createUser2(@Body() requestBody: UserCreationParams): Promise<void> {
  //   this.setStatus(201) // set return status 201
  //   this.service.create(requestBody)
  //   return
  // }
}
