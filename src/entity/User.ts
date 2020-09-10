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
import { getDataBaseConnection } from 'lib/getDatabaseConnection';
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
  errors = {
    username: [] as string[],
    passowrd: [] as string[],
    passwordConfirmation: [] as string[],
  };
  password: string;
  passwordConfirmation: string;
  async validate() {
    if (this.username.trim() === '') {
      this.errors.username.push('用户名不为空');
    }

    if (!/[a-zA-Z0-9]/.test(this.username.trim())) {
      this.errors.username.push('用户名格式不合法');
    }
    if (this.username.trim().length > 32 || this.username.trim().length < 6) {
      this.errors.username.push('用户名长度在6-32之间');
    }
    const connection = await getDataBaseConnection();
    const found = await connection.manager.findOne(User, {
      username: this.username,
    });
    if (found) {
      this.errors.username.push('已存在，不能重复注册');
    }
    if (this.password === '') {
      this.errors.passowrd.push('密码不为空');
    }
    if (this.password !== this.passwordConfirmation) {
      this.errors.passwordConfirmation.push('密码不匹配');
    }
  }
  hasErrors() {
    return !!Object.values(this.errors).find((v) => v.length > 0);
  }
}
