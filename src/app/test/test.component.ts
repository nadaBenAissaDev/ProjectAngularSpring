import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Test} from '../model/Test';
import {TestService} from '../shared/test.service';
import {Domain} from '../model/Domain';
import {Observable} from 'rxjs';
import {Proposition} from '../model/Proposition';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
idDom: number;
listDom: Domain[];
listTest: Observable<Test[]>;
show = false;
choix: string;
type: string;
  constructor(private activateService: ActivatedRoute, private testService: TestService) { }

  ngOnInit(): void {
    this.idDom = this.activateService.snapshot.params.id;
    this.listTest = this.testService.getTestbyDom(this.idDom);
  }
  valider(){
   this.show = true;
  }

}
