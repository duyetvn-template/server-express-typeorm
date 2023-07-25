import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse } from 'tsoa'
import { User } from './dto/user.dto'
import { UserService } from './user.service'

@Route('users')
export class UsersController extends Controller {
  private readonly service: UserService

  constructor() {
    super()
    this.service = new UserService()
  }

  @Get()
  public async getAll(@Path() userId: number, @Query() name?: string) {
    return this.service.getAll()
  }
}
