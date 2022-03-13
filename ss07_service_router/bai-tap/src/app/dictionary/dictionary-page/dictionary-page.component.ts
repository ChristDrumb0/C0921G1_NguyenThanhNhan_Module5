import { Component, OnInit } from '@angular/core';
import {IWord} from '../iword';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  dictionaryList: IWord[];
  result: any;
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.dictionaryList = this.dictionaryService.getAll();
  }



}
