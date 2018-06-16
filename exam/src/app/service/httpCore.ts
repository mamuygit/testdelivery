import {Observable} from "rxjs/Rx";
import {Injectable, NgModule, Inject, InjectionToken} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
export class HttpService {
    constructor(private http: Http, 
                private apiUrl: string = 'http://localhost:3001/') { //Default Call CrazeApi

                }

    sentRequest(urlRequest: string, body: any, method: string = 'GET'): Observable<any> {
        let bodyString   = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' });
        let options      = new RequestOptions({ headers: headers, body: bodyString, method: method }); // Create a request option

        return this.http.request(this.apiUrl + urlRequest, options)
                        .map(response => (response) ? response.json() : null)
                        // // ...and calling .json() on the response to return data
                        .catch((error:any) => Observable.throw(error)); //...errors if any
    }

    /*sentRequestGetHeader(urlRequest: string, body: any, method: string = 'GET'): Observable<any> {
        let bodyString   = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' });
        let options      = new RequestOptions({ headers: headers, body: bodyString, method: method }); // Create a request option

        return this.http.request(this.apiUrl + urlRequest, options)
                        .map(response => {
                            return { 
                                data: (response) ? response.json(): null, 
                                header: this.getHeaderPagingX(response) 
                            }
                        })
                        // // ...and calling .json() on the response to return data
                        .catch((error:any) => Observable.throw(error)); //...errors if any
    }*/
}
