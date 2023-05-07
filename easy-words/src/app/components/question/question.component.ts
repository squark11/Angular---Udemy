import { Component } from '@angular/core';
import { WordType } from 'src/app/data/models';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  word: WordType = null;

  constructor(private wordService: WordsService){

  }

  ngOnInit(): void {
    this.fetchWord(); 
  }

  addToNouns(word: WordType): void{
    this.wordService.addNoun(word);
    this.fetchWord();
  }
  addToVerbs(word: WordType): void{
    this.wordService.addVerb(word);
    this.fetchWord();
  }
  check():void{
    this.wordService.check();
  }

  private fetchWord(): void{
    this.word = this.wordService.getWords().shift();
  }
  
}
