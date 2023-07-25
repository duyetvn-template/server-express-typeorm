import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse } from 'tsoa'
import { UserCreationParams, UsersService } from './user.service'
import { User } from './dto/user.dto'

@Route('users')
export class UsersController extends Controller {
  private readonly usersService: UsersService

  constructor() {
    super()
    this.usersService = new UsersService()
  }

  @Get('{userId}')
  public async getUser(@Path() userId: number, @Query() name?: string): Promise<User> {
    return this.usersService.get(userId, name)
  }

  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createUser(@Body() requestBody: UserCreationParams): Promise<void> {
    this.setStatus(201) // set return status 201
    this.usersService.create(requestBody)
    return
  }

  @SuccessResponse('201', 'Created') // Custom success response
  @Post('create-user')
  public async createUser2(@Body() requestBody: UserCreationParams): Promise<void> {
    this.setStatus(201) // set return status 201
    this.usersService.create(requestBody)
    return
  }
}
