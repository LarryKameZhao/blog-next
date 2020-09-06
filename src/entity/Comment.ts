import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  Timestamp,
} from 'typeorm';
import { User } from './User';
import { Post } from './Post';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('text')
  content: string;
  @CreateDateColumn()
  createdAt: Timestamp;
  @CreateDateColumn()
  updatedAt: Timestamp;
  @ManyToOne((type) => User, (user) => user.comments)
  user: User;
  @ManyToOne((type) => Post, (post) => post.comments)
  post: Post;
}
