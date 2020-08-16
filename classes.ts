class Car {
    readonly model: string;
    readonly numberOfWheels: number;

    constructor(theModel: string) {
        this.model = theModel;
    }
}

//The same Car:
class Car2 {
    readonly numberOfWheels: number;

    constructor(readonly model: string) {}
}

//====Public, private, and protected modifiers
class Animal {
    protected voice: string = '';
    public color: string = 'black';

    constructor() {
        this.go();
    }

    //accessible only in Animal
    private go() {
        console.log('go')
    }
}

class Cat extends Animal {
    setVoice(voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();

//cat.voice = 'Gav';//error
//cat.go();//error

cat.setVoice('Murrr');

//=======Abstract classes====
abstract class Component {
    abstract render(): void;
    abstract info(): string;
}

class AppComponent extends Component {
    render(): void {
        console.log('Rendering...')
    }

    info(): string{
        return 'App component';
    }
}
