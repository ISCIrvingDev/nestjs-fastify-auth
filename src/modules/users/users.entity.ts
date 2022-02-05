import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

enum Roles {
  Admin = 'Admin',
  Public = 'Public',
}

registerEnumType(Roles, {
  name: 'Roles',
  description: 'Roles to manages the areas of the system',
});

@ObjectType()
@Schema()
export class UsersEntity {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String)
  @Prop({
    type: String,
    trim: true,
    required: [true, 'This field is required'],
    minlength: [5, 'Your first name must have at least 5 characters'],
    maxlength: [12, "Your first name can't have more than 12 characters"],
  })
  firstName: string;

  @Field(() => String)
  @Prop({
    type: String,
    trim: true,
    required: [true, 'This field is required'],
    minlength: [5, 'Your last name must have at least 5 characters'],
    maxlength: [12, "Your last name can't have more than 12 characters"],
  })
  lastName: string;

  @Field(() => String)
  @Prop({
    type: String,
    trim: true,
    required: [true, 'This field is required'],
    minlength: [8, 'Your nick name must have at least 8 characters'],
    maxlength: [15, "Your nick name can't have more than 15 characters"],
  })
  nickName: string;

  @Field(() => String)
  @Prop({
    type: String,
    trim: true,
    required: [true, 'This field is required'],
    minlength: [5, 'Your password must have at least 5 character'],
    maxlength: [20, "Your password can't have more than 20 characters"],
  })
  pass: string;

  @Field(() => String)
  @Prop({
    type: String,
    trim: true,
    required: [true, 'This field is required'],
    validate: {
      validator: (val: string) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          val.toLowerCase(),
        ),
      message: (props) => `${props.value} is not a valid email!`,
    },
  })
  email: string;

  @Field(() => Date)
  @Prop({
    type: Date,
    required: [true, 'This field is required'],
    default: new Date(),
  })
  createdAt: Date;

  @Field(() => Date)
  @Prop({
    type: Date,
    required: [true, 'This field is required'],
    default: new Date(),
  })
  updatedAt: Date;

  @Field(() => Roles, {
    defaultValue: Roles.Admin,
  })
  @Prop({
    type: String,
    enum: [Roles.Admin, Roles.Public],
    default: Roles.Admin,
    required: [true, 'This field is required'],
  })
  roles?: string;
}

export type UsersDocument = UsersEntity & Document;
export const UsersSchema = SchemaFactory.createForClass(UsersEntity);
