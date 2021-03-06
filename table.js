class Table {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("table.png");
        World.add(world, this.body);
    }

    display() {
        push();
        imageMode(CENTER);
        fill("brown");
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}