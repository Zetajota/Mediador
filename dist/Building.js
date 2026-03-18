//   Estado extrinseco (único por instancia)
//   Cada edificio del mapa tiene su propia posición,
//   pero comparte el BuildingType con otros del mismo tipo.
export class Building {
    id;
    x;
    y;
    type;
    constructor(id, x, y, type) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.type = type;
    }
    // Delega el render al Flyweight, pasándole la posicion 
    render() {
        this.type.render(this.x, this.y);
    }
}
//# sourceMappingURL=Building.js.map