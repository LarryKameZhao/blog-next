import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Timestamp,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './User';
import { Comment } from './Comment';
@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('varchar')
  title: string;
  @Column('text')
  content: string;
  @Column('int')
  authorId: number;
  @CreateDateColumn()
  createdAt: Timestamp;
  @UpdateDateColumn()
  updatedAt: Timestamp;
  @ManyToOne((type) => User, (user) => user.posts)
  author: User;
  @OneToMany((type) => Comment, (comment) => comment.post)
  comments: Comment[];
}
