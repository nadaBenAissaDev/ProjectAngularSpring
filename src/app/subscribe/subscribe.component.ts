import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Subscribe} from '../model/Subscribe';
import {DomainService} from '../shared/domain.service';
import {ActivatedRoute} from '@angular/router';
import {SubscribeService} from '../shared/subscribe.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
subscribe: Subscribe;
listSubscribe: Subscribe[];
idDom: number;
  constructor(private toastr: ToastrService, private subscribeService: SubscribeService, private activateService: ActivatedRoute) { }
  ngOnInit(): void {
    this.subscribe = new Subscribe();
    this.idDom = this.activateService.snapshot.params.id;
  }
  createsubscribe(){
    this.subscribeService.createSubscribe(this.subscribe, this.idDom).subscribe(
      com => {
        console.log('subscribe created!');
      }
    );
    this.toastr.success('Hello!', 'you are registered !');
  }

}
