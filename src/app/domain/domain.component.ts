import {Component, Injectable, OnInit} from '@angular/core';
import {DomainService} from '../shared/domain.service';
import {Domain} from '../../model/Domain';
import {ActivatedRoute} from '@angular/router';
import {Comment} from '../../model/Comment';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css'],
})
export class DomainComponent implements OnInit {
  listDomain: Domain[];
  search: string;
  constructor(private domainService: DomainService, private activateService: ActivatedRoute) {
  }

  ngOnInit() {
    this.domainService.getAllDomain().subscribe(
      (data: Domain[]) => {
        this.listDomain = data;
        console.log('All domain' + this.listDomain);
      }
    );
  }
  like(idDom) {
    this.domainService.updateDomainLike(idDom).subscribe(
      () => {
        console.log('comment updated!' + idDom);
        this.listDomain = this.listDomain.filter(dom => dom.id !== idDom);
      }
    );
  }
}
