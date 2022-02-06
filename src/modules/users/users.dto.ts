import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  nickName: string;

  @Field(() => String)
  pass: string;

  @Field(() => String)
  email: string;
}

@InputType()
export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['pass'] as const),
) {}
