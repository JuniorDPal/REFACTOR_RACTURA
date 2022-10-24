import { Comedy } from './PlayComedy';
import { Tragedy } from './PlayTragedy';
import { VolumeCredits } from './VolumeCredits';

export class InvoiceUtilities {   
    static printInvoice (invoice:any , plays: any) {
        let totalAmount = 0;
        let volumeCredits = 0;
        let result = `Detalle de factura para ${invoice[0].customer}\n`;
        const format = new Intl.NumberFormat("de-DE",{ style: "currency", currency: "EUR", minimumFractionDigits: 2 }).format;
        
        for (let perf of invoice[0].performances) {
            const play = plays[perf.playID];
            let thisAmount = 0;
            
            switch (play.type) {
                case "tragedy":
                    thisAmount = Tragedy.playPerformance(perf.audience);
                    break;
                case "comedy":
                    thisAmount = Comedy.playPerformance(perf.audience);
                    break;
                default:
                    throw new Error(`Tipo desconocido: ${play.type}`);
            }
            
            // add volume credits
            volumeCredits = VolumeCredits.addCredits(perf.audience, play.type);
            result += `${play.name}: ${format(thisAmount/100)} (${perf.audience} asientos)\n`;
            totalAmount += thisAmount;
        }
        result += `Total a pagar ${format(totalAmount/100)}\n`;
        result += `Has ganado ${volumeCredits} creditos\n`;
        return result;
    }
}