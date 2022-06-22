import { Match } from "src/app/models/match";

export interface TodayMatchProvider {
    findForToday(): Promise<Match[]>;
}
