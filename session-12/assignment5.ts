interface User {
    id: number;
    name: string;
}

class UserRepository {
    constructor(private users: User[]) {}
    getall(): User[]{
        return this.users;
    }
}

type UserRepositoryConstructor = new(users: User[]) => UserRepository;

type FormatUserName = (user: User) => string;

const formatUserName: FormatUserName = (user) => `User: ${user.name}`;