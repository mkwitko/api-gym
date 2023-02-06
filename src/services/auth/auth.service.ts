import { Injectable } from '@nestjs/common';
import { UserService } from 'src/api/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(userName: string, password: string) {
    const user = await this.userService.findByName(userName);

    if (user && user.password === password) {
      const { password, ...rest } = user;
      return rest;
    }
    return null;
  }
}
