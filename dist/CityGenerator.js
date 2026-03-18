import { Building } from "./FlyWeight/index.js";
import { BuildingTypeFactory } from "./Factory/index.js";
// Genera una ciudad
export class CityGenerator {
    catalog;
    cols;
    rows;
    buildings = [];
    constructor(catalog, cols, rows) {
        this.catalog = catalog;
        this.cols = cols;
        this.rows = rows;
    }
    generate() {
        let id = 1;
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const spec = this.catalog[Math.floor(Math.random() * this.catalog.length)];
                const type = BuildingTypeFactory.get(spec.name, spec.texture, spec.color, spec.floors, spec.category);
                this.buildings.push(new Building(id++, col * 100, row * 100, type));
            }
        }
        const total = this.buildings.length;
        const unique = BuildingTypeFactory.getPoolSize();
        console.log(`Ciudad ${this.cols}x${this.rows}: ${total} edificios | ` +
            `${unique} tipos únicos en pool | ${total - unique} instancias ahorradas`);
    }
}
//# sourceMappingURL=CityGenerator.js.map