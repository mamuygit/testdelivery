import { Http } from "@angular/http";
import { HttpService } from "./httpCore";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IGetNumberPossibleResponse } from "../dto/get-number-possible.response";
import { IPostNumberPossibleRouteRequest } from "../dto/post-number-possible-request";

@Injectable() export class Case3Service extends HttpService {
    constructor(http: Http) {
        super(http);
    }

    postFindCheapestRoute(body: IPostNumberPossibleRouteRequest): Observable<IGetNumberPossibleResponse> {
        return this.sentRequest(`api/find-number-route-maximum`, body, 'POST');
    }
}