import { HttpService } from "./httpCore";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IGetTownResponse } from "../dto/get-town-response";
import { IGetTargetTownForMatchRequest } from "../dto/get-target-for-match-request";

@Injectable() export class TownService extends HttpService {
    constructor(http: Http) {
        super(http);
    }

    getTown(): Observable<Array<IGetTownResponse>> {
        return this.sentRequest(`api/town`, null);
    }

    getTargetTownForMatch(body: IGetTargetTownForMatchRequest): Observable<Array<IGetTownResponse>> {
        return this.sentRequest(`api/target-town-for-match`, body, 'POST');
    }


    postMaatchTown(body: IGetTargetTownForMatchRequest): Observable<Array<IGetTownResponse>> {
        return this.sentRequest(`api/match-town`, body, 'POST');
    }
}