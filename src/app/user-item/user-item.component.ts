import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../tasks/task.service';
import {Task} from '../../app/tasks/task';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input()
  userItem!: Task;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
  changeProduto(user: Task){
    this.taskService.save(user);
  }
}
