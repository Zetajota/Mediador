//   FLYWEIGHT — Estado intrinseco (compartido, inmutable)
//   Una sola instancia por tipo de edificio en toda la ciudad.
export class BuildingType {
    name;
    texture;
    color;
    floors;
    category;
    constructor(name, texture, color, floors, category) {
        this.name = name;
        this.texture = texture;
        this.color = color;
        this.floors = floors;
        this.category = category;
    }
    // Renderea usando su estado intrínseco + la posición (extrínseca) recibida 
    render(x, y) {
        console.log(`  [${this.name}] ${this.floors} pisos | ${this.texture} | pos: (${x}, ${y})`);
    }
}
//# sourceMappingURL=BuildingType.js.map