import { Injectable } from '@angular/core';
import{Task} from './task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
user: Task[] = [
  {id: 1, nome: 'Bianca', cep: '08577160',londradouro: 'bebedouro', n: 45, bairro:'Vila Gepina', complemento:'Casa', cidade:'Itaqua', email:'bianca.alencar@fingerdigital.com.br'}
]
  constructor() { }

  getAll(){
    // this.user = JSON.parse(localStorage.getItem('user')|| '{}')
    return this.user
  }

  getId(id: number){
    const user = this.user.find((pi) => pi.id == id)
    return user
  }

  save(u: Task){
    if(u.id){
      const userArry = this.getId(u.id)
      userArry!.nome = u.nome
      userArry!.cep = u.cep
      userArry!.londradouro = u.londradouro
      userArry!.n = u.n
      userArry!.bairro = u.bairro
      userArry!.complemento = u.complemento
      userArry!.cidade = u.cidade
      userArry!.email = u.email
    }else{
      let lastId = 1
      if(this.user.length > 0){
        lastId = this.user[this.user.length - 1].id
      }
      u.id = lastId  + 1
      this.user.push(u)
    }
    // const data = JSON.stringify(this.user)
    // localStorage.setItem('user',data)
}
}
