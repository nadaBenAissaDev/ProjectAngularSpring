import {Component, Injectable, OnInit} from '@angular/core';
import {DomainService} from '../shared/domain.service';
import {Domain} from '../model/Domain';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css'],
})
export class DomainComponent implements OnInit {
  listDomain: Domain[];
  search: string;
  parameter: string;
  constructor(private domainService: DomainService, private activateService: ActivatedRoute) {
  }

  ngOnInit() {
    this.parameter = this.activateService.snapshot.params.id;
    if (this.parameter == null ){
    this.domainService.getAllDomain().subscribe(
        (data: Domain[]) => {
          this.listDomain = data;
          console.log('All domain' + this.listDomain);
        }
      );
    }
    if (this.parameter != null){
      this.domainService.getAllDomainbyType(this.parameter).subscribe(
        (data: Domain[]) => {
          this.listDomain = data;
          console.log('All domain by type' + this.listDomain);
        }
      );
    }
  }
  like(idDom) {
    this.listDomain[idDom].like++;
    this.domainService.updateDomainLike(idDom).subscribe(
      () => {
        this.domainService.getAllDomain().subscribe((data: Domain[]) => this.listDomain = data);
        console.log('like is updated!');
      }
    );
  }
  recherche(s){
  this.domainService.searchMultiCri(s).subscribe(
    (data: Domain[]) => {
      this.listDomain = data;
      console.log('search multicritère' + this.listDomain);
    }
  );
  }
}
