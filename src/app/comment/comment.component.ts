import { Component, OnInit } from '@angular/core';
import {CommentService} from '../shared/comment.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Comment} from '../model/Comment';
import {Observable} from 'rxjs';
import {Domain} from '../model/Domain';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  listComment: Comment[];
  commentForm: FormGroup;
  commentupdateForm: FormGroup;
  idDom: number;
  show = true;
  idCom: number;
  comment: Comment;
  constructor(private serviceComment: CommentService, private activateService: ActivatedRoute) { }

  ngOnInit(): void {
    this.idDom = this.activateService.snapshot.params.id;
    this.commentForm = new FormGroup({
      content: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
    this.commentupdateForm = new FormGroup({
      contentupdate: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
    this.serviceComment.getCommentbyDom(this.idDom).subscribe(
      (data: Comment[]) => {
        this.listComment = data;
        console.log('All Comment' + this.listComment);
      }
    );
  }

  get content() {
    return this.commentForm.get('content');
  }
  get contentupdate() {
    return this.commentupdateForm.get('contentupdate');
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
  updateComment(comment: Comment) {
    this.show = false;
    this.idCom = comment.id;
  }
  saveUpdate(idCom){
    this.serviceComment.updateComment(this.commentupdateForm.value, idCom).subscribe(
    );
  }
}
