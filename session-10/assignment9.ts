class CounterService {
    private count: number = 0;
    protected log(message:string): void{
        console.log(message);

    }

    public increment(): number{
        this.count++;
        this.log("Incremented");
        return this.count; // if used string here then -> Type 'string' is not assignable to type 'number'. 
    }

    public getValue(): number{
        return this.count;
    }
}

class OtherCounter extends CounterService{
    public reset(): void{             // If void not written
        this.log("resetting counter") // Property or signature expected.ts(1131)
                                      // Object is possibly 'undefined'.ts(2532)
    }
}


const counter = new CounterService();

counter.increment();
counter.getValue()

// counter.count; // error(private) 
// counter.log("x"); // error(protected)
