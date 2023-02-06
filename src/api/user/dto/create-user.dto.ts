export class CreateUserDto {
  id: number;
  name: string;
  userName: string;
  password: string;
  status: number;
  membership?: any;
  last_payment?: string;
  valid_until?: string;
  created_at: Date;
}
