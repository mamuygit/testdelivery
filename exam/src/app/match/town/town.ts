import { Component, OnInit, NgModule } from '@angular/core';
import { TownService } from '../../service/TownService';
import { IGetTownResponse } from '../../dto/get-town-response';
import { IGetTargetTownForMatchRequest } from '../../dto/get-target-for-match-request';
import { NgForm } from '@angular/forms';
import { IPostMatchTownRequest } from '../../dto/post-match-town-request';

@Component({
    selector: 'app-match-town',
    templateUrl: './town.html',
    styleUrls: ['./town.scss']
})
export class MatchTownComponent implements OnInit {
    towns: Array<IGetTownResponse>;
    townsTarget: Array<IGetTownResponse>;
    cost: String;
    selectedValue: String = 'default';
    selectedTargetValue: String = 'default';

    constructor(private townService: TownService,) { }

    ngOnInit() {
        this.townService.getTown()
            .subscribe((response: Array<IGetTownResponse>) => {
                this.towns = response;
            });
    }

    ngOnDestroy() {
    }

    onChangeCategorySelect(event) {
        let value = event.target.value;
        console.log(value);
        let req = <IGetTargetTownForMatchRequest>{ fromTownId: value}
        this.selectedValue = value;
        this.townService.getTargetTownForMatch(req)
            .subscribe((response: Array<IGetTownResponse>) => {
                this.townsTarget = response;
            });
    }
    onChangeTargetTown(event) {
        let value = event.target.value;
        this.selectedTargetValue = value;
    }

    

    onSubmitSubscribe(form: NgForm) {
        if (form && form.value) {
            let req = <IPostMatchTownRequest> {
                fromTownId:this.selectedValue,
                targetTownId: this.selectedTargetValue,
                costValue: form.value.costValue
            } 
            this.townService.postMatchTown(req)
                .subscribe((response: any) => {
                    if (response == null) {
                        window.alert("Match Success!");
                    } 
                }, (err) => {
                    window.alert("Duplicate!!!")
                });
        }
    }
}
