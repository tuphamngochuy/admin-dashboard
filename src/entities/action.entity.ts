import BaseEntity from '@entities/base.entity';
import { Permission } from '@entities/permission.entity';
import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, OneToMany } from 'typeorm';

@ObjectType()
@Entity({
  name: 'action',
})
export class Action extends BaseEntity {
  @Field(() => String)
  @Column('text', { name: 'name' })
  declare name: string;

  @Field(() => Boolean)
  @Column('boolean', { name: 'is_active', default: false })
  declare isActive: boolean;

  @Field(() => [Permission])
  @OneToMany(() => Permission, (permission) => permission.action)
  declare permissions: Permission[];
}
