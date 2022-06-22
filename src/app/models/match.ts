import { Stake } from "./stake";

export class Match {
    constructor(
        public homeTeam: string,
        public awayTeam: string,
        public date: string,
        public meanHome: number,
        public meanDraw: number,
        public meanAway: number,
        public stakes: Stake[]
    ) { }
}
