import { BuildingType } from "./BuildingType.js";
export declare class Building {
    readonly id: number;
    readonly x: number;
    readonly y: number;
    readonly type: BuildingType;
    constructor(id: number, x: number, y: number, type: BuildingType);
    render(): void;
}
//# sourceMappingURL=Building.d.ts.map