class Foo {
    name;
    city;

    constructor(name, city) {
        this.name = name;
        this.city = city;
    }


    getName() {
        return this.name;
    }
}

console.log(new Foo("111", "北京"))