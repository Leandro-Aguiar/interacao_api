import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  userModel = new User();

  mensagemerro = ""

  mensagemacerto = ""
  

  
  receberDados(){

    console.log(this.userModel)

    this.loginService.login(this.userModel).subscribe((response) => {
      console.log("Deu Certo")
      this.mensagemerro = ''
      localStorage.setItem("nomeUsuario", response.body.user.nome)
      this.mensagemacerto = "Dados Corretos"
     

      

    }, (respostaErro) => {
      this.mensagemacerto = ''
      console.log("Deu Erro")
      this.mensagemerro = respostaErro.error
      //alert(respostaErro.error)
    } )

  }


}
