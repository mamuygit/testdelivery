import { OnInit, Component } from "@angular/core";
import { TownService } from "../service/TownService";
import { Case3Service } from "../service/Case3Service";

@Component({
    selector: 'app-case3',
    templateUrl: './case3.html',
    styleUrls: ['./case3.scss']
})
export class Case3Component implements OnInit {

    constructor(private townService: TownService,
        private case2Service: Case3Service) {

    }
    ngOnInit() {

    }
}