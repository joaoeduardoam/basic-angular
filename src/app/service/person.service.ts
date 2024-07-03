
// Importar o Injectable para prover a injeção de dependência
import { Injectable } from '@angular/core';

// Importar o HttpClient
import { HttpClient } from '@angular/common/http';

// Importar o modelo de produto
import { Person } from '../model/Person';

// Importar o RxJS
import { Observable } from 'rxjs';

// Configuração do @Injectable
@Injectable({
  providedIn: 'root'
})

// Classe
export class PersonService {

  // URL da API
  url:string = 'http://localhost:3000/persons';

  // Primeiro método a ser executado quando referenciada a classe de serviço
  constructor(private http:HttpClient) { }

  // Método para selecionar produtos
  select():Observable<Person[]>{
    return this.http.get<Person[]>(this.url);
  }

  // Método para cadastrar produtos
  save(obj:Person):Observable<Person>{
    return this.http.post<Person>(this.url, obj);
  }

  // Método para alterar produtos
  update(obj:Person):Observable<Person>{
    return this.http.put<Person>(`${this.url}/${obj.id}`, obj);
  }

  // Método para remover produtos
  remove(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }
} 