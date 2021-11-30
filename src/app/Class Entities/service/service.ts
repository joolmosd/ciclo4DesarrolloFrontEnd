import { Client } from "../client/client";
import { Entrust } from "../entrust/entrust";

export class Service {
    
    id: string;
    date:string;
    time:string;
    value:number;
    origin:Client;
    destiny:Client;
    entrust: Entrust;
}
