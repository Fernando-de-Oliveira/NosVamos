import { Component, OnInit } from '@angular/core';
import { Responsavel } from '../../models/Responsavel';
import { PCD } from '../../models/PCD';
import { PcdService } from '../../services/pcd.service';
import { ResponsavelService } from '../../services/responsavel.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pcd-form',
  templateUrl: './pcd-form.component.html',
  styleUrls: ['./pcd-form.component.css']
})
export class PcdFormComponent implements OnInit {
  idResp;
  PCD: PCD = {
    id_pcd:0,
  nome_pcd: "",
  nascimento_pcd: "",
  rg_pcd: "",
  tipo_deficiencia:"" ,
  telefone_pcd: "",
  senha_pcd: "",
  id_resp: 0
  };

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


  constructor(private pcdService: PcdService, private responsavelService: ResponsavelService,  private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(localStorage.getItem('isLogged') == undefined ||localStorage.getItem('isLogged') == "false" ){
      this.router.navigate(['/login']);
    }
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

  saveNewPCD(){
    delete this.PCD.id_pcd;
    this.PCD.id_resp = this.responsavel.ID_RESP;
    this.pcdService.savePCD(this.PCD).subscribe(
      res=>{
        console.log(res);
        console.log(this.PCD);
        this.router.navigate(['/mapa']);
      },
      err => console.error(err)

    )
  }

}
