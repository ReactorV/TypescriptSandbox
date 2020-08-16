interface Rect {
    readonly id: number,
    color?: string,
    size: {
        width: number,
        height: number
    }
}

const rect1: Rect = {
    id: 12,
    color: 'white',
    size: {
        width: 34,
        height: 34
    }
};

const rect2: Rect = {
    id: 12,
    size: {
        width: 34,
        height: 34
    }
};

rect2.color = 'red';

//bringing to type
const rect3 = {} as Rect;
const rect4 = <Rect>{};//old option

//=========Interface inheritance==========

interface RectWithArea extends Rect {
    getArea: () => number;
}

const rect5: RectWithArea = {
    id: 89,
    size: {
        width: 45,
        height: 45
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
};

//==========Implements===========

interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock1 implements IClock {
    time: Date = new Date();

    setTime(date: Date): void {
        this.time = date;
    }
}

//=======Dynamic keys========
interface Styles {
    [key: string]: string
}

const styleHeader: Styles = {
    border: '1px solid green',
    marginTop: '2px'
};
