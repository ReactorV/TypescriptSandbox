interface Person {
    name: string,
    age: number
}

type PersonKeys = keyof Person;

let key: PersonKeys = 'name';
key = 'age';

//key = 'root';//error

type User = {
    _id: number,
    name: string,
    email: string,
    createdAt: Date
};

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'email'>;//'name' | 'createdAt'
type UserKeysNoMeta2 = Pick<User, 'name' | 'createdAt'>;//'name' | 'createdAt'

let user1: UserKeysNoMeta1 = 'name';
//user1 = '_id';// error

const user2: UserKeysNoMeta2 = {
    name: 'Mike',
    createdAt: new Date()
};
