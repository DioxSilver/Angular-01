import { Component, Input, OnInit } from '@angular/core';
import { TaskList } from '../../model/modelo';
import { ColaboradoresComponent } from '../colaboradores/colaboradores.component';
@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.scss']
})
export class ColaboradorComponent implements OnInit {
  @Input()
  colaborador?: Array<TaskList>


  

  constructor() { }

  ngOnInit(): void {
    
  }

}
