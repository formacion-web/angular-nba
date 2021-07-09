import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  template: `<app-champions-form [NBA_Champions]="NBA_Champions"></app-champions-form>`
})
export class ChampionsComponent implements OnInit {

  NBA_Champions = [
    {
      year: "1947",
      champion: "Philadelphia Warriors",
      logo:"https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/200px-Golden_State_Warriors_logo.svg.png",
      champion_url: "https://en.wikipedia.org/wiki/1946%E2%80%9347_Philadelphia_Warriors_season",
      best_players: [
        "Dallmar, Howie",
        "Fleishman, Jerry",
        "Fulks, Joe",
        "Guokas, Matt",
        "Hillhouse, Art",
        "Kaplowitz, Ralph",
        "Musi, Angelo",
        "Rosenberg, Petey",
        "Rullo, Jerry",
        "Senesky, George"
      ]
    },
    {
      year: "1948",
      champion: "Baltimore Bullets ",
      logo:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/The_logo_of_the_original_Baltimore_Bullets_from_the_postwar_era.gif/120px-The_logo_of_the_original_Baltimore_Bullets_from_the_postwar_era.gif",
      champion_url: "https://en.wikipedia.org/wiki/1947%E2%80%9348_Baltimore_Bullets_season",
      best_players: [
        "Fuetsch, Herm",
        "Hermsen, Kleggie",
        "Hoffman, Paul",
        "Jeannette, Buddy",
        "Klotz, Red",
        "Lewis, Grady",
        "Meinhold, Carl",
        "Reiser, Chick",
        "Schulz, Dick",
        "Simmons, Connie"
      ]
    },
    {
      year: "1949",
      champion: "Minneapolis Lakers ",
      logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/220px-Los_Angeles_Lakers_logo.svg.png",
      champion_url: "https://en.wikipedia.org/wiki/1948%E2%80%9349_Minneapolis_Lakers_season",
      best_players: [
        "Carlson, Don",
        "Dwan, Jack",
        "Ellefson, Ray",
        "Ferrin, Arnie",
        "Forman, Donnie",
        "Gardner, Earl",
        "Jaros, Tony",
        "Jorgensen, Johnny"
        
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
