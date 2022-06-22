import { Match } from "./match";

export class SelectedMatch {
    static readonly HOME_BET = 'home';
    static readonly DRAW_BET = 'draw';
    static readonly AWAY_BET = 'away';
    
    constructor (
        public bet: string,
        public meanRate: number,
        public match: Match,
    ) { }
} 
