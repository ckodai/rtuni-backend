import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity,
    ManyToOne,
    OneToMany
} from 'typeorm';
import { SysUser } from './sysuser.entity';

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    IdRole: number;

    @Column()
    RoleType: string;

    @ManyToOne(type => SysUser, Sysuser => Sysuser.Roles)
    Sysuser: SysUser;
}