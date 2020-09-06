import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Timestamp,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Post } from './Post';
import { Comment } from './Comment';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('varchar')
  username: string;
  @Column('varchar')
  passwordDigest: string;
  @CreateDateColumn()
  createdAt: Timestamp;
  @UpdateDateColumn()
  updatedAt: Timestamp;
  @OneToMany((type) => Post, (post) => post.author)
  posts: Post[];
  @OneToMany((type) => Comment, (comment) => comment.user)
  comments: Comment[];
}
