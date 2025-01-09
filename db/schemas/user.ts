import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Unique,
  Index,
} from "typeorm";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255 })
  firstName!: string;

  @Column({ length: 255 })
  lastName!: string;

  @Column({ length: 15, nullable: true, unique: true, default: null })
  phoneNumber: string | null = null;

  @Column({ length: 255, unique: true })
  email!: string;

  @Column({ length: 255 })
  password: string | null = null;

  @Column({ type: "text", nullable: true })
  profilePicture!: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt!: Date;
}
