import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Domain} from '../model/Domain';

@Component({
  selector: 'app-sous-domain',
  templateUrl: './sous-domain.component.html',
  styleUrls: ['./sous-domain.component.css']
})
export class SousDomainComponent implements OnInit {
  @Input() domainfils: Domain;
  @Input() searchfils: string;
  @Output() notificationParent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  sendlike(){
  this.notificationParent.emit(this.domainfils.id);
  }

}
