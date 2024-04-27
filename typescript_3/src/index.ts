type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = (a: number, b: number): number => {
  return a * b;
};

console.log(multiply(2, 3));

const total = (...nums: number[]): number => {
  return nums.reduce((a, b) => a + b);
};

console.log(total(1, 2, 3, 4, 5));

const createError = (message: string): never => {
  throw new Error(message);
};

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberOrString = (value: string | number): string => {
  if (typeof value === "string") {
    return "string";
  }
  if (isNumber(value)) return "number";
  return createError("Invalid input");
};

type One = string;
type Two = string | number;
type Three = "hello";

//convert to more or less specific
let a: One = "hello";
let b = a as Two; // lestt specific
let c = a as Three; // more specific

let d = <One>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "add") as string;

//wrong as TS sees no problem, but the function is returning a string
let nextVal: number = addOrConcat(2, 2, "concat") as number;

10 as unknown as string;

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
  constructor(
    public name: string,
    private lang: string,
    protected music: string
  ) {
    this.name = name;
    this.lang = lang;
    this.music = music;
  }

  public getLang() {
    return `hello I'm procficient in ${this.lang} `;
  }
}

const Shirish = new Coder("Shirish", "JS", "Rock");
console.log(Shirish.getLang());
// console.log(Shirish.age);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    lang: string,
    music: string
  ) {
    super(name, lang, music);
  }

  public getName() {
    return `My name is ${this.name}`;
  }
}

const Sara = new WebDev("Macbook", "Sara", "TS", "Pop");
console.log(Sara.getName());

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} is playing ${this.instrument} by ${action}`;
  }
}

const Page = new Guitarist("Jimmy", "Guitar");
console.log(Page.play("strums"));

class Peeps {
  static count: number = 0;

  static getCount() {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Jane = new Peeps("Jane");
console.log(Peeps.getCount());
console.log(John.id);


////////////////////////////////

class Bands{
  private dataState: string[];
  constructor(){
    this.dataState = [];
  }

  public get data(): string[]{
    return this.dataState;
  }

  public set data(value: string[]){
    if(Array.isArray(value) && value.every((elem) => typeof elem === "string")){
      this.dataState = value;
      return
    }
    else throw new Error("Invalid input");
  }
}

const MyBand = new Bands();
MyBand.data = ["Led Zeppelin", "The Beatles"];
console.log(MyBand.data)

