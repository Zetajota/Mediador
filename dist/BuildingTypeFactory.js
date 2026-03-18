import { BuildingType } from "./BuildingType.js";
export class BuildingTypeFactory {
    static pool = new Map();
    static get(name, texture, color, floors, category) {
        const key = `${name}_${floors}F`;
        if (!this.pool.has(key)) {
            this.pool.set(key, new BuildingType(name, texture, color, floors, category));
        }
        return this.pool.get(key);
    }
    // Consulta sin efecto secundario — usada para detectar si es NUEVO o CACHE 
    static hasType(name, floors) {
        return this.pool.has(`${name}_${floors}F`);
    }
    static getPoolSize() { return this.pool.size; }
}
//# sourceMappingURL=BuildingTypeFactory.js.map