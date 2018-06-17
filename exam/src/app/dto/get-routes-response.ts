import { IGetTownMatch } from "./dto-town-match";

export interface IGetRoutesResponse {
    findRoutes: Array<IGetTownMatch>,
    totalCost: number
}