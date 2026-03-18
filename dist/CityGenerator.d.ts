interface BuildingSpec {
    name: string;
    texture: string;
    color: string;
    floors: number;
    category: string;
}
export declare class CityGenerator {
    private readonly catalog;
    private readonly cols;
    private readonly rows;
    private buildings;
    constructor(catalog: BuildingSpec[], cols: number, rows: number);
    generate(): void;
}
export {};
//# sourceMappingURL=CityGenerator.d.ts.map