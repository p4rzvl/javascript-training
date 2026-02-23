// Assignment 5
// Create a type ReadOnlyUser where all properties are readonly.
// Create a type StringifiedUser where all properties become string.
// Create a type OptionalAndNullableUser where all properties are optional and nullable.


type ReadOnlyUser = {
    readonly id: number,
    readonly name: string,
    readonly email: string
}

type Stringified = {
    [K in keyof ReadOnlyUser]: string;
}

type OptionalNullableUser = {
    [K in keyof ReadOnlyUser]?: ReadOnlyUser[K]
}