import { Component, OnInit } from '@angular/core';
import {Domain} from '../model/Domain';
import {DomainService} from '../shared/domain.service';

@Component({
  selector: 'app-about-as',
  templateUrl: './about-as.component.html',
  styleUrls: ['./about-as.component.css']
})
export class AboutAsComponent implements OnInit {
  listDomain: Domain[];

  constructor(private domainService: DomainService) {
  }

  ngOnInit() {
    this.domainService.getAllDomain().subscribe(
      (data: Domain[]) => {
        this.listDomain = data;
        console.log('All domain' + this.listDomain);
      }
    );

  }
}
