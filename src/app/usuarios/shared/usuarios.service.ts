import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  private usuarios = [
    { nome: 'Jorge', funcao: 'Web Developer', tipo: 'Administrador', descricao: 'Gosta de tecnologia e games.' },
    { nome: 'Maria', funcao: 'Web Design', tipo: 'Administrador', descricao: 'Gosta de tecnologia e games e série.' },
    { nome: 'Ana Maria Braga de Oliveira Souza', funcao: 'Jornalista', tipo: 'Aluno', descricao: 'Apaixonada por séris, ama viajar' },
    { nome: 'José Meira', funcao: 'Fotógrafo', tipo: 'Editor', descricao: 'Apaixonado por fotografia e pela natureza' },
    { nome: 'Luana', funcao: 'Estudante', tipo: 'Aluno', descricao: '' }
  ]

  getUsuarios() {   
    return this.usuarios;   
  }
}
