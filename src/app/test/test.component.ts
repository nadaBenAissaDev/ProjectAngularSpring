import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Test} from '../model/Test';
import {TestService} from '../shared/test.service';
import {Observable} from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  idDom: number;
  listTest: Observable<Test[]>;
  show = false;
  checked: string;
  valeur: number;
  widthbar: number;
  valid: boolean;
  i: number;
  color: string;

  constructor(private activateService: ActivatedRoute, private testService: TestService, private toastr: ToastrService) {
  }
  ngOnInit(): void {
    this.valeur = 0;
    this.idDom = this.activateService.snapshot.params.id;
    this.listTest = this.testService.getTestbyDom(this.idDom);
    this.widthbar = 0;
  }

  valider() {
    this.show = true;
    this.toastr.success('', 'Vous avez obtenu:' + this.valeur + 'réponses valides' );
  }

  propositionChecked(i: number, answer: string, checked: string) {
    if (answer === checked) {
      this.valeur = this.valeur + 1;
      this.widthbar = this.widthbar + 20;
    }
    if (this.valeur === i){
      this.color = 'red';
    }

  }
}
