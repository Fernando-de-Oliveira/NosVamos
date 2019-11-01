import { Component, OnInit } from '@angular/core';
import {  RouterModule, Router, ActivatedRoute} from '@angular/router';
import { ResponsavelService } from '../../services/responsavel.service';
import { Responsavel } from '../../models/Responsavel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  responsavel: Responsavel = {
    ID_RESP:0,
  nome_resp: "",
  foto_resp:"",
  cpf_resp: "",
  email_resp: "",
  endereco_resp:"" ,
  senha_resp: "",
  tel1_resp: "",
  tel2_resp: ""
  };
  isLogged = false;
  nomeResp = "";
  errorMsg = document.getElementById("errorMsg");
  constructor(private responsavelService: ResponsavelService,  private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }


  loginResponsavel(event){
    // event.preventDefault();
    // console.log(event);
    this.responsavelService.loginResponsavel(this.responsavel).subscribe(
      res=> {
        console.log(res);
        this.isLogged = true;
        this.responsavel = res;
        localStorage.setItem('isLogged', JSON.stringify(this.isLogged));
        localStorage.setItem('idResp', JSON.stringify(this.responsavel.ID_RESP));
         this.router.navigate(['/mapa']);
      },
      err=>{
        console.log(err);
        // this.callErrorMsg(err);
        if(err==404){
          this.callErrorMsg("Email ou senha incorretos");
        }
        localStorage.setItem('isLogged', JSON.stringify(this.isLogged));
        this.router.navigate(['/login']);
      }
    )
  }

  callErrorMsg(err){
    // this.errorMsg.classList.add('erroVisible');
    $('#errorMsg').addClass('erroVisible');
    $('#progressErr').addClass('progressVisible');
    setTimeout(()=> {
      $('#errorMsg').removeClass('erroVisible');
      $('#progressErr').removeClass('progressVisible');
    },6000)
  }
  closeError(){
  $('#errorMsg').removeClass('erroVisible');
}
}
