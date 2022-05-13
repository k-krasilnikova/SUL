import { Location as ILocation } from 'react-router';

interface ILocationState {
  state: { from?: string };
}

export type TLocation = ILocation & ILocationState;
