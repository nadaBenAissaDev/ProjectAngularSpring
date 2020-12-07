import {Injectable} from '@angular/core';
import {DomainService} from './domain.service';
import {Domain} from '../model/Domain';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListDomainService {
  listDomain: Observable<Domain[]>;
  constructor(private domainService: DomainService) {
  }
  getListDomain(){
    this.listDomain = this.domainService.getAllDomain();
    return this.listDomain;
  }
}
