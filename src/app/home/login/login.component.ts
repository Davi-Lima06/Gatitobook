import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario= '';
  senha='';

  constructor(private authService: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.autentica(this.usuario, this.senha).subscribe(() => {
      this.router.navigate(['animais'])
      console.log('autenticado');
    },
    (error) => {
      alert('usuario ou senha inválida');
      console.log(error);
    }
    )
  }

}