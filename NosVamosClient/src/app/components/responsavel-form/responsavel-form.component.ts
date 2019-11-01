import { Component, OnInit } from '@angular/core';
import { Responsavel } from '../../models/Responsavel';
import { ResponsavelService } from '../../services/responsavel.service';
import { Router, ActivatedRoute } from '@angular/router';
import {LoginComponent} from './../login/login.component'

@Component({
  selector: 'app-responsavel-form',
  templateUrl: './responsavel-form.component.html',
  styleUrls: ['./responsavel-form.component.css']
})
export class ResponsavelFormComponent implements OnInit {

    // @HostBinding('class') clases = 'row';

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


    edit: boolean = false;
    errorMsg;
    constructor(private loginComporent: LoginComponent,private responsavelService: ResponsavelService, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
      const params = this.activatedRoute.snapshot.params;
      // if (params.id_resp) {
      //   this.responsavelService.getResponsavelById(params.id_resp)
      //     .subscribe(
      //       res => {
      //         console.log(res);
              // this.responsavel = res;
      //         this.edit = true;
      //       },
      //       err => console.log(err)
      //     )
      // }
    }

    saveNewResponsavel() {
      delete this.responsavel.ID_RESP;
      this.responsavelService.saveResponsavel(this.responsavel)
        .subscribe(
          res => {
            console.log(res);
            console.log(this.responsavel);
            this.router.navigate(['/cadastrar-pcd/' + this.responsavel.cpf_resp]);
          },
          error => this.errorMsg = error
        )
    }

  }
