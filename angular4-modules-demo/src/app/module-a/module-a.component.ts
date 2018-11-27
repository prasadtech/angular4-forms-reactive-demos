import { AuthService } from '../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-a',
  templateUrl: './module-a.component.html',
  styles: []
})
export class ModuleAComponent implements OnInit {

  constructor(private service:AuthService) { }

  ngOnInit() {
  }

}
