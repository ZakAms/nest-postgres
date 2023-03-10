import { Column, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "../task.model";


export class Task {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}