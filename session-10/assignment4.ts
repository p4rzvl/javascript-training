// Intersection Type

// Intersection types combine multiple types into one.
// i.e. if we are taking intersection of multiple types 
// in one, after that when we create a new object for 
// that type we have to define values for all the keys 
// in all the types intersectioned.

// Create an Order using intersection ( & )
type OrderBase = {
  orderId: number;
  amount: number;
};
type Auditable = {
  createdAt: string;
  createdBy: string;
};
type Order = OrderBase & Auditable;

// Remove one required property and observe the compiler error
// Type '{ orderId: number; amount: number; createdAt: string; }' is not assignable to type 'Order'.
// Property 'createdBy' is missing in type '{ orderId: number; amount: number; createdAt: string; }' 
// but required in type 'Auditable'.ts(2322)
const order1:Order = {
    orderId: 1,
    amount: 50,
    createdAt: "11-02-2026",
    createdBy: "tsIsWeird",
}

console.log(order1);

// Create the same model using interfaces and extends
interface OrderBaseIF {
    orderId: number;
    amount: number;
  };
interface AuditableIF extends OrderBase {
    createdAt: string;
    createdBy: string;
  };

const orderIF: AuditableIF = {
  orderId: 2,
  amount: 100,
  createdAt: "12-02-2026",
  createdBy: "p4rzvl"
} 


// Decide which approach feels clearer and why

// Intersection using '&' feels more clearer as it is 
// more flexible than 'extends', we can intersect 
// Object types, union types, mapped types


// Identify when intersection is better than union
// Use Intersection when            Use union when:
// -> combining traits              -> modeling alternatives
// -> layering capabilities         -> representing variants
// -> require all properties        -> Only one shape should exist at a time



