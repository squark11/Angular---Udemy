import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WordType } from 'src/app/data/models';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy{
  word: WordType = null;
  private words = [];
  private subscription: Subscription;

  constructor(private wordService: WordsService){

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.wordService.getWords().subscribe((words:WordType[])=>{
      this.words=words;
      this.fetchWord();
    })
  }

  addToNouns(word: WordType): void{
    this.wordService.addNoun(word);
    this.fetchWord();
  }
  addToVerbs(word: WordType): void{
    this.wordService.addVerb(word);
    this.fetchWord();
  }

  private fetchWord(): void{
    this.word = this.words.shift();
  }
  
}
