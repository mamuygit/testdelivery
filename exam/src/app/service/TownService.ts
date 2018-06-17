import { HttpService } from "./httpCore";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { IGetTownResponse } from "../dto/get-town-response";
import { IGetTargetTownForMatchRequest } from "../dto/get-target-for-match-request";
import { IPostFindGoodRouteRequest } from "../dto/post-find-good-cost-request";
import { IGetRoutesResponse } from "../dto/get-routes-response";

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


    postMatchTown(body: IGetTargetTownForMatchRequest): Observable<Array<IGetTownResponse>> {
        return this.sentRequest(`api/match-town`, body, 'POST');
    }

    postFindGoodRoute(body: IPostFindGoodRouteRequest): Observable<IGetRoutesResponse> {
        return this.sentRequest(`api/find-route-cost`, body, 'POST');
    }
}