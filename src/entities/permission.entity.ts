import { Action } from '@entities/action.entity';
import BaseEntity from '@entities/base.entity';
import { Role } from '@entities/role.entity';
import { Field, ObjectType } from 'type-graphql';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@ObjectType()
@Entity({
  name: 'permission',
})
export class Permission extends BaseEntity {
  @Field(() => Role)
  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  declare role: Role;

  @Field(() => Action)
  @ManyToOne(() => Action)
  @JoinColumn({ name: 'action_id' })
  declare action: Action;
}
