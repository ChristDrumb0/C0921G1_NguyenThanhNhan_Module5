import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  result: any;
  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const keyword = this.activatedRoute.snapshot.params.word;
    this.result = this.dictionaryService.findByWord(keyword);
    console.log(keyword);
  }

}
