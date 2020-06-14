import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity,
    ManyToOne,
    OneToMany
} from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class SysUser {
    @PrimaryGeneratedColumn()
    IdSysUser: number;

    @Column()
    Primer_Nombre: string;

    @Column()
    Segundo_Nombre: string;

    @Column()
    Primer_Apellido: string;

    @Column()
    Segundo_Apellido: string;

    @Column()
    Username: string;

    @Column()
    Password: string;

    @OneToMany(type => Role, role => role.Sysuser)
    Roles: Role[];
}