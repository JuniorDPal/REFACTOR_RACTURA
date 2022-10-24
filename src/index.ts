import {invoices} from './invoices';
import {plays} from './plays';
import { InvoiceUtilities } from './InvoiceUtilities';
const invoicesJSON = JSON.parse(invoices);
const playsJSON =  JSON.parse(plays);

console.log(InvoiceUtilities.printInvoice(invoicesJSON, playsJSON));


