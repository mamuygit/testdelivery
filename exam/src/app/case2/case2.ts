import { Component, OnInit } from "@angular/core";
import { IGetTownResponse } from "../dto/get-town-response";
import { TownService } from "../service/TownService";
import { Case2Service } from "../service/Case2Service";
import { NgForm } from '@angular/forms';
import { IPostNumberPossibleRouteRequest } from "../dto/post-number-possible-request";
import { IGetNumberPossibleResponse } from "../dto/get-number-possible.response";

@Component({
    selector: 'app-case2',
    templateUrl: './case2.html',
    styleUrls: ['./case2.scss']
})
export class Case2Component implements OnInit {

    constructor(private townService: TownService, 
        private case2Service: Case2Service){

    }
    choice:number = 1;
    towns: Array<IGetTownResponse>;
    fromRoute: String = 'default';
    targetRoute: String = 'default';
    totalNum:number;
    ngOnInit() {
        this.townService.getTown()
            .subscribe((response: Array<IGetTownResponse>) => {
                this.towns = response;
            });
    }

    //Case2:
    onChangeFromTown(event) {
        let value = event.target.value;
        this.fromRoute = value;
    }

    onChangeTargetTown(event) {
        let value = event.target.value;
        this.targetRoute = value;
    }
    onSelectionChange(entry) {
        this.choice = entry;
        console.log(entry);
    }

    onSubmitCase2() {
        let req = <IPostNumberPossibleRouteRequest> {
            fromTownId: this.fromRoute,
            targetTownId: this.targetRoute
        }
        if(this.choice == 1 || 2) {
            this.case2Service.postFindNumberRoute(req)
                .subscribe((response: IGetNumberPossibleResponse) => {
                    this.totalNum = response.totalNum;
                    console.log(this.totalNum );
                });
        }
    }
}