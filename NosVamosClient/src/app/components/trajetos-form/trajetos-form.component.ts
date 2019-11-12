import { Component, OnInit } from '@angular/core';
import { Responsavel } from '../../models/Responsavel';
import { Endereco } from '../../models/Endereco';
import { Etapa } from '../../models/Etapa';
import { Trajeto } from '../../models/Trajeto';
import { EnderecoService } from '../../services/endereco.service';
import { ResponsavelService } from '../../services/responsavel.service';
import { TrajetoService } from '../../services/trajeto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-trajetos-form',
  templateUrl: './trajetos-form.component.html',
  styleUrls: ['./trajetos-form.component.css']
})
export class TrajetosFormComponent implements OnInit {
  idResp;
  primeiroEnd = false;
  idOrigem;
  idDestino;
  nomeSegundo;
  nomePrimeiro;

  trajeto: Trajeto = {
    nome_trajeto: "",
    id_end_origem: 0,
    id_end_destino: 0
  }

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

  etapa: Etapa = {
    nome_etapa: "Nome da Etapa",
    order_in: 0,
    id_end_origem: 0,
    id_end_destino: 0,
  }

  endereco: Endereco = {
    logra_end: "",
    cidade_end: "",
    numero_end: "",
    uf_end: "",
    nome_end: "",
    foto_end: "",
    cep_end: "",
    bairro_end: "",
    id_resp: 0
  }
  constructor(
    private trajetoService: TrajetoService,
    private enderecoService: EnderecoService,
    private responsavelService: ResponsavelService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

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

  openModalEndereco(){
    $('.modalBg').css('display','block');
  }

  adicionaEtapa(){
    // var novaEtapa;
    // novaEtapa = '<div class="trajeto__etapa">';
    // novaEtapa += '<input type="text" class="etapa__title" name="nome_etapa" [(ngModel)]="etapa.nome_etapa" value="Nova Etapa">';
    // novaEtapa += '<span class="etapa__remove">X</span>';
    // novaEtapa += '<input type="file" id="etapa-foto" name="foto_etapa">';
    // novaEtapa += '<label for="etapa-foto" class="etapa__foto">Anexar Imagem</label>';
    // novaEtapa += '<input type="text" id="etapa-audio" name="audio_etapa">';
    // novaEtapa += '<label for="etapa-audio" class="etapa__audio"></label>';
    // novaEtapa += '</div>';
    var clone = $('.trajeto__etapa').clone(true);
    $('.etapas').append(clone);
  }
  cancelEndereco(){
    $('.modalBg').css('display', 'none');
  }

  adicionaEndereco(){
    this.endereco.id_resp = this.responsavel.ID_RESP;
    this.enderecoService.saveEndereco(this.endereco).subscribe(
      res=> {
        console.log(res);
      },
      err => console.error(err)
    );
    setTimeout(()=>{
       this.recuperarEndereco();
      }, 2000);
  }

  recuperarEndereco(){
    console.log(this.endereco);
  this.enderecoService.getEndByLogra(this.endereco).subscribe(
    res=>{
      console.log(res);
      $('.modalBg').css('display', 'none');
      if(!this.primeiroEnd){
      $('.trajetos__endereco:first-child div').css('background', '#00ff1f');
      this.idOrigem = res.ID_END;
      this.nomePrimeiro = this.endereco.nome_end;

      }else{
      $('.trajetos__endereco div').css('background', '#00ff1f');
      this.idDestino = res.ID_END;
        this.nomeSegundo = this.endereco.nome_end;
      }
      this.primeiroEnd = true;
      console.log(this.idOrigem + "\n" + this.idDestino)
    },
    err => console.error(err)
  );

  }

  salvarTrajeto(){

    this.trajeto.id_end_origem = this.idOrigem;
    this.trajeto.id_end_destino = this.idDestino;
    this.trajeto.nome_trajeto = "De" + this.nomePrimeiro + "para" + this.nomeSegundo;
    this.trajetoService.saveTrajeto(this.trajeto).subscribe(
      res=>{
        console.log(res);
      },
      err => console.log(err)
    )
  }

}
