import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/shared/model/Equipo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  champions:Array<Equipo>=[];
  e1:Equipo=new Equipo();
  e2:Equipo=new Equipo();
  e3:Equipo=new Equipo();
  
  constructor() { }

  ngOnInit(): void {
    this.e1.ano="2015-16";
    this.e1.nombre="Cleveland Cavaliers";
    this.e1.url="https://www.nba.com/cavaliers/";
    this.e1.url_image="https://az1.hatstoremedia.com/hatstore/images/image-cleveland-cavaliers-kepsar-2017-02-21-125348593/555/555/0/cleveland-cavaliers-kepsar.png";
    this.e1.jugadores=["Lebron James","Kyrie Irving","Kevin Love","J.R. Smith","Anderson Varejao"];

    this.e2.ano="2014-15";
    this.e2.nombre="Golden State Warriors";
    this.e2.url="https://www.nba.com/warriors/";
    this.e2.url_image="https://az2.hatstoremedia.com/hatstore/images/image-golden-state-warriors-kepsar-2017-02-21-125423886/555/555/0/golden-state-warriors-kepsar.png";
    this.e2.jugadores=["Stephen Curry","Klay Thompson","Draymong Green","Andrew Bogut","Gestus Ezeli"];

    this.e3.ano="2013-14";
    this.e3.nombre="San Antonio Spurs";
    this.e3.url="https://www.nba.com/spurs/";
    this.e3.url_image="https://az1.hatstoremedia.com/hatstore/images/image-san-antonio-spurs-kepsar-2017-02-21-125650566/555/555/0/san-antonio-spurs-kepsar.png";
    this.e3.jugadores=["Tim Duncan","Tony Parker","Manu Ginóbili","Kawhi Leonard","Tiago Splitter"];

    this.champions.push(this.e1,this.e2,this.e3)
    console.log(this.champions)
  }

} 