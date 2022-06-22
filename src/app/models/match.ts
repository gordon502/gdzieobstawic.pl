import { Stake } from "./stake";

export class Match {
    constructor(
        public homeTeam: string,
        public awayTeam: string,
        public date: string,
        public meanHome: Number,
        public meanDraw: Number,
        public meanAway: Number,
        public stakes: Stake[]
    ) { }
}
