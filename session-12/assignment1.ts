// Assignment 1
// Create a type IsNumber<T> .
// Create a type ExtractEmail<T> that extracts email type if present.


type IsNumber<T> = T extends number ? true: false

type A = IsNumber<number>
type B = IsNumber<string>
type C = IsNumber<42>
type D = IsNumber<false>

type ExtractEmail<T> = 
T extends `${string}@${string}` ? T :never;

type E = ExtractEmail<"test@example.com">;
type F = ExtractEmail<"Hi">
type G = ExtractEmail<string>

