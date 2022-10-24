import {PLAY_CASES_VALUE} from "./PlaysCasesValue"
let amount = PLAY_CASES_VALUE.comedy[0];

export class Comedy {
        
    static playPerformance(audience: number){
        if(audience > PLAY_CASES_VALUE.comedy[1]) {
            amount += 1000 + 500 * (audience - PLAY_CASES_VALUE.comedy[1]);
        }
        amount += 300 * audience;
        return amount;
    }
}