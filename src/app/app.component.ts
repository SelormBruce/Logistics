import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import  * as M from '../assets/materialize/js/materialize.min.js';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent  implements OnInit{
  title = 'Logistics';
  options ={};
  ngOnInit(){
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, this.options);
  }
}
