import {Component, OnInit} from '@angular/core';
import {CommentService} from '../shared/comment.service';
import {Comment} from '../model/Comment';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Domain} from '../model/Domain';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {DomainService} from '../shared/domain.service';

@Component({
  selector: 'app-domain-detail',
  templateUrl: './domain-detail.component.html',
  styleUrls: ['./domain-detail.component.css']
})
export class DomainDetailComponent implements OnInit {
  listDomain: Observable<Domain[]>;
  idDom: number;
  constructor(private http: ActivatedRoute, private domainService: DomainService) {
  }

  ngOnInit(): void {
    this.idDom = this.http.snapshot.params.id;
    this.listDomain = this.domainService.getAllDomain();
  }
}
