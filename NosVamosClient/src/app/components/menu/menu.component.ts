import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { ResponsavelService } from '../..//services/responsavel.service';
import { Responsavel } from '../../models/Responsavel';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  idResp;
  nomeResp;

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
  constructor(private router:Router, private responsavelService:ResponsavelService) { }

  ngOnInit() {
    this.idResp = localStorage.getItem('idResp');
      if (this.idResp) {
        this.responsavelService.getResponsavelById(this.idResp)
          .subscribe(
            res => {
              this.responsavel = res;
              console.log(this.responsavel);
            },
            err => console.log(err)
          )
      }
  }

  logOut(){
    localStorage.setItem('isLogged', "false");
    this.router.navigate(['/home']);
  }


}


