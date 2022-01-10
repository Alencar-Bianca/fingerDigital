import { Task } from './../tasks/task';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../tasks/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
usu: Task = new Task();
title = "Cadastrar"
  constructor(private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id){
      this.usu = this.taskService.getId(parseInt(id))!
      this.title = "Editar"
    }
  }
  onSubmit(){
    this.taskService.save(this.usu)
    this.router.navigate(['/'])
  }

}
