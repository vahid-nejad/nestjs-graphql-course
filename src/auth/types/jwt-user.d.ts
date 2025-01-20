import { Role } from 'src/enums/role.enum';

export type JwtUser = {
  userId: number;
  role: Role;
};
