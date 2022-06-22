import { Stake } from "./stake";

export class Match {
    constructor(
        public homeTeam: string,
        public awayTeam: string,
        public date: Date,
        public stakes: Stake[]
    ) { }
}
