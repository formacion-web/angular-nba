import {Person} from './Person';

export interface Champion {
  year: string,
  champion: string,
  championUrl: string,
  image: string,
  bestPlayers: Array<Person>
}
