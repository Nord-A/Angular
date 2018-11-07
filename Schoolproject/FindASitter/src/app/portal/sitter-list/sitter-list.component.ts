import { Component, OnInit } from '@angular/core';
import { TempDataService } from '../../temp-data.service';
import { Sitter } from '../../entities/sitter';

@Component({
  selector: 'app-sitter-list',
  templateUrl: './sitter-list.component.html',
  styleUrls: ['./sitter-list.component.scss']
})
export class SitterListComponent implements OnInit {
  sitters: Sitter[];
  constructor(private tempData: TempDataService) { 
  this.sitters = tempData.sitters;}
  ngOnInit() {
  }

}
