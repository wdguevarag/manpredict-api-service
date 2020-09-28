import express from 'express';
import { CONFIG } from '../environment/environment';
import socketIO from 'socket.io';
import http from 'http';
// import https from 'https';
// import fs from 'fs';
//import path from 'path';



//const key = fs.readFileSync(path.join(path.resolve('.'), '/cert/key.pem'));
//const cert = fs.readFileSync(path.join(path.resolve('.'), '/cert/cert.pem'));


export default class Server {


    private static _instance: Server;

    public app: express.Application;
    public port: number;
    public express: any;

    public io: socketIO.Server;

    private httpServer: http.Server;
    //private httpsServer: https.Server;


    constructor() {


        this.app = express();
        this.port = CONFIG.SERVER.PORT;


        //this.httpsServer = new https.Server({ key: key, cert: cert }, this.app);
        this.httpServer = new http.Server(this.app);

        this.io = socketIO(this.httpServer)
        this.express = express;

    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }



    start(callback: any) {

        //if (CONFIG.SERVER.HTTPS) {
        //    this.httpsServer.listen(this.port, callback);
        //} else {
            this.httpServer.listen(this.port, callback);
        //}



    }





}
