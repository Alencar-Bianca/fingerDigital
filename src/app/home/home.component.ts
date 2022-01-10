import { Component, OnInit } from '@angular/core';
import { TaskService } from './../tasks/task.service';
import{Task} from '../../app/tasks/task';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
usu: Task[] = []
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.usu = this.taskService.getAll();
  }

}
