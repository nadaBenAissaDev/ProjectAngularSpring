import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Test} from '../../model/Test';
import {TestService} from '../shared/test.service';
import {Domain} from '../../model/Domain';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
idDom: number;
listDom: Domain[];
listTest: Observable<Test[]>;
type: string;
  constructor(private activateService: ActivatedRoute, private testService: TestService) { }

  ngOnInit(): void {
    this.idDom = this.activateService.snapshot.params.id;
    /*this.testService.getTestbyDom(this.idDom).subscribe(
      (data: Test[]) => this.listTest = data
    );*/
    this.listTest = this.testService.getTestbyDom(this.idDom);
  }

}
