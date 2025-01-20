import {
  Args,
  Context,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from 'src/entities/user.entity';
import { UserService } from './user.service';
import { Logger, UseGuards } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { GqlJwtGuard } from 'src/auth/guards/gql-jwt-guard/gql-jwt.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { JwtUser } from 'src/auth/types/jwt-user';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { RolesGuard } from 'src/auth/guards/roles/roles.guard';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  private readonly logger = new Logger(UserResolver.name);
  @Query(() => [User], { name: 'users' })
  async findAll() {
    return await this.userService.findAll();
  }

  @UseGuards(GqlJwtGuard)
  @Query(() => User)
  getUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @ResolveField('profile')
  async profile(@Parent() user: User) {
    this.logger.debug(`Fetching profile for user ${user.id}`);
    return await user.profile;
  }

  // @Mutation(() => User)
  // createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
  //   return this.userService.create(createUserInput);
  // }

  @Roles(Role.ADMIN)
  @UseGuards(RolesGuard)
  @UseGuards(GqlJwtGuard)
  @Mutation(() => User)
  updateUser(
    @CurrentUser() user: JwtUser,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    console.log({ currentUser: user });

    return this.userService.update(user.userId, updateUserInput);
  }

  @Mutation(() => Boolean)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
