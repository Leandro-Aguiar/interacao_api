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

  mensagemerro = "";

  mensagemacerto = "";
  

  
  receberDados(){

    console.log(this.userModel)

    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "by ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";"]

    listaPalavras.forEach(palavra => {
      if(this.userModel.email?.toLowerCase().includes(palavra)){
        this.mensagemerro = "Dados inválidos" + palavra

        return;
      }
    });

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
