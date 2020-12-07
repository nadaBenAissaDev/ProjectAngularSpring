import {Component, OnInit} from '@angular/core';
import {CommentService} from '../shared/comment.service';
import {Comment} from '../model/Comment';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Domain} from '../model/Domain';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {SousDomainComponent} from '../sous-domain/sous-domain.component';
import {DomainComponent} from '../domain/domain.component';
import {ListDomainService} from '../shared/listDomain.service';
import {DomainService} from '../shared/domain.service';

@Component({
  selector: 'app-domain-detail',
  templateUrl: './domain-detail.component.html',
  styleUrls: ['./domain-detail.component.css']
})
export class DomainDetailComponent implements OnInit {
  listComment: Comment[];
  listDomain: Observable<Domain[]>;
  comment: Comment;
  commentForm: FormGroup;
  idDom: number;
  show = true;
  inputModify: string;

  constructor(private serviceComment: CommentService, private http: ActivatedRoute, private domainService: DomainService) {
  }

  ngOnInit(): void {
    this.idDom = this.http.snapshot.params.id;
    this.listDomain = this.domainService.getAllDomain();
    this.commentForm = new FormGroup({
      content: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
    this.serviceComment.getCommentbyDom(this.idDom).subscribe(
      (data: Comment[]) => {
        this.listComment = data;
        console.log('All Comment' + this.listComment);
      }
    );
  }

  getContent() {
    return this.commentForm.get('content');
  }

  createComment() {
    this.serviceComment.createComment(this.commentForm.value, this.idDom).subscribe(
      com => {
        console.log('Comment created!');
        this.listComment = [this.commentForm.value, ...this.listComment];
      }
    );
  }

  deleteComment(id) {
    this.serviceComment.deleteComment(id).subscribe(
      () =>   {
        console.log('comment deleted!' + id);
        this.listComment = this.listComment.filter(com => com.id !== id);

      }
  );
  }


  updateComment(id) {
    this.show = false;
  }
}
