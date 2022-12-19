import { RouterModule } from '@angular/router';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { Router } from "@angular/router"

@Component({
  selector: 'app-nova-transferencia',

  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  constructor(private service: TransferenciaService, private router: Router) {}

  @Output() aoTransferir = new EventEmitter<any>();
  valor: number;
  destino: number;

  transferir() {
    console.log('solicitado');
    const valor: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valor).subscribe((resultado) => {
      console.log(resultado);
      this.router.navigateByUrl('extrato')
      //this.limparCampos();

    },(error) => console.error(error)

    );

  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
