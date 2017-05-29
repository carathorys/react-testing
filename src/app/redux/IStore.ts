import { ICounter } from 'models/counter';
import { IStars } from 'models/stars';
import { IDrawerState } from 'models/drawer';

export interface IStore {
  counter: ICounter;
  stars: IStars;
  drawer: IDrawerState;
};
