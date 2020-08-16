function add(a:number, b:number): number {
    return a + b;
}

function toTrimAndUpperCase(str: string): string {
    return str.trim().toUpperCase();
}

interface MyPosition {
    x: number | undefined,
    y: number | undefined
}

interface MyPositionDefaultY extends MyPosition {
    defaultX: number
}

function position(): MyPosition;
function position(a: number): MyPositionDefaultY;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }

    if (a && !b) {
        return {x: a, y: undefined, defaultY: 38}
    }

    return {x: a, y: b}
}

console.log('Empty: ', position());
console.log('One param: ', position(23));
console.log('Two param: ', position(23, 32));
