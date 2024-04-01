import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  constructor(id: number = 0, userName: string = '', password: string = '') {
    this.id = 0;
    this.userName = userName;
    this.password = password;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  password: string;
}
