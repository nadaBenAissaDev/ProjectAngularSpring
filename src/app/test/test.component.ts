import {Component, OnInit} from '@angular/core';
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
  afficher = false;
  prop: string;
  type: string;
  question: string;
  answer: string;
  checked: string;
  valeur = 0;
  color: string;
  seconds = 0;
  qnProgress = 0;
  timeElapsed;

  constructor(private activateService: ActivatedRoute, private testService: TestService) {
  }

  ngOnInit(): void {
    this.testService.seconds = 0;
    this.testService.qnProgress = 0;
    this.testService.displayTimeElapsed();
    this.idDom = this.activateService.snapshot.params.id;
    this.listTest = this.testService.getTestbyDom(this.idDom);
    this.startTimer();
  }

  valider() {
    this.show = true;
  }

  propositionChecked(question: string, answer: string, checked: string) {
    if (answer === checked) {
      this.valeur = this.valeur + 1;
    }
    if (answer === checked) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }
  }

  startTimer() {
    this.testService.timer = setInterval(() => {
      this.testService.seconds++;
    }, 1000);
  }
}
