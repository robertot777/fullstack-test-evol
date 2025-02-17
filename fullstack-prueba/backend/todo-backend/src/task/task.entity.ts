import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  destroy() {
    throw new Error('Method not implemented.');
  }
  update(task: Task): Task | PromiseLike<Task> {
    throw new Error('Method not implemented.');
  }
  static findOne(arg0: { where: { id: number; }; }) {
    throw new Error('Method not implemented.');
  }
  static findAll(): Task[] | PromiseLike<Task[]> {
    throw new Error('Method not implemented.');
  }
  static create(task: Task): Task | PromiseLike<Task> {
    throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: false })
  completed: boolean;

  @Column('simple-array')
  tags: string[];

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  dueDate: Date;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
