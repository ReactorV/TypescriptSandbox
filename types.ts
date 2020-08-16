const isLoading: boolean = true;

const int: number = 30;
const float: number = 4.3;
const num: number = 4e39;

const message: string = 'Message!';

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const stringArray: string[] = ['hello', 'typescript'];

//Tuple
const contact: [string, number] = ['Vadzim', 23455];

//Any
let variable: any = 45;
variable = 'str';
variable = [];

//-----
function sayMyName(name: string): void {
    console.log(name);
}

sayMyName('Michael');

//Never
function throwError(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while (true) {}
}

//Type
type Login = string;
const login: Login = 'Admin';
const login2: Login = 34;//error

type ID = string | number;
const id: ID = 1234;
const id2: ID = '1234';
const id3: ID = true;//error

type someType = null | undefined | string;
