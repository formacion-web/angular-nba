import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions-form',
  templateUrl: './champions-form.component.html',
  styleUrls: ['./champions-form.component.scss']
})
export class ChampionsFormComponent implements OnInit {

  @Input() NBA_Champions:any| undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
