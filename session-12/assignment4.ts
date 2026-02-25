abstract class Service<T> {
    abstract execute(): T;
}

type User = {
    id: string,
    name: string
}


class UserService extends Service<User>{
    execute(): User {
        return {
            id: "unique011",
            name: "Parva Kumar"
        }
    }
}


const service = new UserService();

const user = service.execute();

user.id
user.name

