import { BuildingType } from "./BuildingType.js";
export declare class BuildingTypeFactory {
    private static pool;
    static get(name: string, texture: string, color: string, floors: number, category: string): BuildingType;
    static hasType(name: string, floors: number): boolean;
    static getPoolSize(): number;
}
//# sourceMappingURL=BuildingTypeFactory.d.ts.map