

export class VolumeCredits {
    
    static addCredits(audience:number, play:string) : number{
        let volumeCredits = 0;

        console.log(volumeCredits);
        volumeCredits += Math.max(audience - 30, 0);
        console.log(volumeCredits);
        console.log(play);
        if(play == "comedy"){
            volumeCredits += Math.floor(audience / 5);
            console.log(volumeCredits);
        }
        console.log(volumeCredits);
        return volumeCredits;
    }


}