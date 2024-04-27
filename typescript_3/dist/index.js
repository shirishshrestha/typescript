"use strict";
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(2, 3));
const total = (...nums) => {
    return nums.reduce((a, b) => a + b);
};
console.log(total(1, 2, 3, 4, 5));
const createError = (message) => {
    throw new Error(message);
};
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === "string") {
        return "string";
    }
    if (isNumber(value))
        return "number";
    return createError("Invalid input");
};
//convert to more or less specific
let a = "hello";
let b = a; // lestt specific
let c = a; // more specific
let d = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "add");
//wrong as TS sees no problem, but the function is returning a string
let nextVal = addOrConcat(2, 2, "concat");
10;
//The DOM
// const image = document.querySelector("img") as HTMLImageElement;
// const imag = document.querySelector("img")!;
// const nextImage = <HTMLImageElement>document.querySelector("img");
// image.src = "https://www.google.com";
// imag.src = "https://www.google.com";
class Coder {
    // name: string;
    // lang: string;
    // music: string;
    // constructor(name: string, lang: string, music: string) {
    //   this.name = name;
    //   this.lang = lang;
    //   this.music = music;
    // }
    constructor(name, lang, music) {
        this.name = name;
        this.lang = lang;
        this.music = music;
        this.name = name;
        this.lang = lang;
        this.music = music;
    }
    getLang() {
        return `hello I'm procficient in ${this.lang} `;
    }
}
const Shirish = new Coder("Shirish", "JS", "Rock");
console.log(Shirish.getLang());
// console.log(Shirish.age);
class WebDev extends Coder {
    constructor(computer, name, lang, music) {
        super(name, lang, music);
        this.computer = computer;
    }
    getName() {
        return `My name is ${this.name}`;
    }
}
const Sara = new WebDev("Macbook", "Sara", "TS", "Pop");
console.log(Sara.getName());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is playing ${this.instrument} by ${action}`;
    }
}
const Page = new Guitarist("Jimmy", "Guitar");
console.log(Page.play("strums"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Jane = new Peeps("Jane");
console.log(Peeps.getCount());
console.log(John.id);
////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((elem) => typeof elem === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Invalid input");
    }
}
const MyBand = new Bands();
MyBand.data = ["Led Zeppelin", "The Beatles"];
console.log(MyBand.data);
