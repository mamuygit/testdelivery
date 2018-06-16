import { Component, OnInit } from '@angular/core';
import { IGetTownResponse } from '../dto/get-town-response';
import { TownService } from '../service/TownService';
import { NgForm } from '@angular/forms';
import { IPostFindGoodRouteRequest } from '../dto/post-find-good-cost-request';

@Component({
    selector: 'app-about',
    templateUrl: './home.html',
    styleUrls: ['./home.scss']
})
export class HomeComponent implements OnInit {
    towns: Array<IGetTownResponse>;
    selectedValue1: String = 'default';
    selectedValue2: String = 'default';
    selectedValue3: String = 'default';
    selectedValue4: String = 'default';

    towns3: Array<IGetTownResponse>;
    towns4: Array<IGetTownResponse>;

    constructor(private townService: TownService) { }

    ngOnInit() {
        this.townService.getTown()
            .subscribe((response: Array<IGetTownResponse>) => {
                this.towns = response;
            });
    }

    ngOnDestroy() {
    }

    onChangeTargetTown1(event) {
        let value = event.target.value;
        this.selectedValue1 = value;
        this.handleTown(value);
    }

    onChangeTargetTown2(event) {
        let value = event.target.value;
        this.selectedValue2 = value;
        this.handleTown(value);
    }

    onChangeTargetTown3(event) {
        let value = event.target.value;
        this.selectedValue3 = value;
        this.handleTown(value);
    }

    onChangeTargetTown4(event) {
        let value = event.target.value;
        this.selectedValue4 = value;
    }

    
    onSubmitSubscribe(form: NgForm) {
        if (form && form.value) {
            let req = <IPostFindGoodRouteRequest>{
                targetTown1: this.selectedValue1,
                targetTown2: this.selectedValue2,
                targetTown3: this.selectedValue3,
                targetTown4: this.selectedValue4
            }
            
            this.townService.postFindGoodRoute(req)
                .subscribe((response: any) => {
                    if (response == null) {
                    }
                }, (err) => {
                });
        }
    }

    private handleTown(value) {
        let isSelect: boolean = (this.selectedValue1 != 'default' && 
                                this.selectedValue2 != 'default');

        this.towns3 = (isSelect) ? this.towns : [];
        if(this.towns3.length == 0) {
            this.selectedValue3 = 'default';
        }
        this.towns4 = (isSelect && this.selectedValue3 != 'default') ? this.towns : []; 
        if (this.towns4.length == 0) {
            this.selectedValue4 = 'default';
        }
    }
}
