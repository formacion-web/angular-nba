import { Component, OnInit } from '@angular/core';
import { Champion} from '../model/Champion';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss']
})

export class TableroComponent implements OnInit {
  constructor() {

  }

campeonatos:Array<Champion> = [
      {
        year: '2013-14',
        champion: 'Miami Heat',
        championUrl: 'https://www.nba.com/heat/',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71UaE3bpChL.png',
        bestPlayers: [
          { name: 'Lebron', surname: 'Raymone James' },
          { name: 'Dwyane', surname: 'Tyrone Wade' },
          { name: 'Christopher ', surname: 'Wesson Bosh' },
          { name: 'Almario ', surname: 'Vernard Chalmers' },
          { name: 'Walter ', surname: 'Ray Allen' },
        ]
      },
      {
        year: '1997-98',
        champion: 'Chicago Bulls',
        championUrl: 'https://www.nba.com/bulls/',
        image: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/2248.png',
        bestPlayers: [
          { name: 'Michael', surname: 'Jeffrey Jordan' },
          { name: 'Scottie ', surname: ' Maurice Pippen' },
          { name: 'Dennis ', surname: 'Keith Rodman' },
          { name: 'Toni ', surname: 'Kukoč' },
          { name: 'Luc ', surname: 'Longley' },
        ]
      },
      {
        year: '2008-09',
        champion: 'Boston Celtics',
        championUrl: 'https://www.nba.com/celtics/',
        image: 'https://images.vexels.com/media/users/3/129509/isolated/preview/b9439b4f4a5115e4e7995ab6450ab1b0-logotipo-de-los-boston-celtics-by-vexels.png',
        bestPlayers: [
          { name: 'Walter', surname: 'Ray Allen' },
          { name: 'Paul', surname: 'Anthony Pierce' },
          { name: 'Kevin', surname: 'Maurice Garnett' },
          { name: 'Rajon', surname: 'Pierre Rondo' },
          { name: 'James Mikley', surname: 'Mantell Posey' },
        ]
      }
    ]



  ngOnInit(): void {
  }

}
