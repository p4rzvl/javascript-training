// Assignment 2
// Create FirstArgument<T> to extract first parameter type.
// Test it with a function that takes (id: string, active: boolean) .


type FirstArgument<T> = 
    T extends (arg1: infer A, ...args: any[]) => any ? A : never;


type MyFunc = (id:string, active:boolean) => void;
type Result = FirstArgument<MyFunc>;

type B = FirstArgument<(x: number) => void>;

type C = FirstArgument<string>;