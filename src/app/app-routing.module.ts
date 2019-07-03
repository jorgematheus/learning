import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './guard/auth-guard.service';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
  },
  {
    path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'users', 
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule),
    canActivate: [AuthGuard]    
  },
  {
    path: 'lessons', 
    loadChildren: () => import('./conteudos/aulas/aulas.module').then(m => m.AulasModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contents', 
    loadChildren: () => import('./conteudos/conteudos/conteudos.module').then(m => m.ConteudosModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'courses', 
    loadChildren: () => import('./conteudos/cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'classes', 
    loadChildren: () => import('./conteudos/turmas/turmas.module').then(m => m.TurmasModule),
    canActivate: [AuthGuard]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
