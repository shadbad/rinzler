import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  constructor(
    id: number = 0,
    userName: string = '',
    password: string = '',
    salt: string = ''
  ) {
    this.id = 0;
    this.userName = userName;
    this.password = password;
    this.salt = salt;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  password: string;

  @Column()
  salt: string;
}
