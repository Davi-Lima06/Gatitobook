import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ){}

  canLoad(route: Route,
     segments: UrlSegment[]
     ):
     boolean
     | UrlTree
     | Observable<boolean
     | UrlTree>
     | Promise<boolean
     | UrlTree> {
      if(this.usuarioService.estaLogado()){
        this.router.navigate(['animais']);
        return false;
      }
      return true;
  }

}
