import {PLAY_CASES_VALUE} from "./PlaysCasesValue"
let amount = PLAY_CASES_VALUE.tragedy[0];

export class Tragedy {
        
    static playPerformance(audience: number){
        if(audience > PLAY_CASES_VALUE.tragedy[1]) {
            amount += 1000 * (audience - PLAY_CASES_VALUE.tragedy[1]);
        }
        return amount;
    }
}