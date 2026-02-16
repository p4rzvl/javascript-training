// Create Admin and Customer interfaces using a common base
// Extend the base interface to add role-specific properties
interface BaseUser {
    id: string;
    name: string;
    email: string;
}

interface Admin extends BaseUser{
    role: "admin";
    permisssions: string[];
}

interface Customer extends BaseUser{
    role: "customer";
    memberType: string;
}



// Write a function that accepts BaseUser
function greet(user: BaseUser){
    console.log(`Hello, ${user.name}(${user.id})`);
    
}
// Pass both Admin and Customer objects to the function

const admin:Admin = {
    id: "a1",
    name: "Parva",
    email: "parva@gmail.com",
    role: "admin",
    permisssions: ["READ", "CREATE", "DELETE"]
}

const customer1: Customer = {
    id: "c1",
    name: "Yash",
    email: "yash@gmail.com",
    role: "customer",
    memberType: "gold"
}

greet(admin);
greet(customer1);
// Design an interface for an API response object
interface ApiResponse <T = unknown>{
    success: boolean;
    payload?: T;
    error?: string;
    statusCode?: number
}

// Create a function that accepts this interface as a parameter
function handleResponse<T>(res: ApiResponse<T>){
    if (!res.success) {
        return console.error("API error: ", res.error);
    }
    console.log("response: ", res.payload);
    
}
// Extend the interface and reuse it
interface PagedResponse<T> extends ApiResponse<T[]> {
    page: number;
    total: number
}

const userList: PagedResponse<BaseUser> = {
    success: true,
    payload: [admin, customer1],
    page: 1,
    total: 3

}

handleResponse(userList);
// Create an interface for a Product
interface Product {
    id: string,
    name: string,
    price: number,
    inStock: boolean;
}

// Create a variable that follows this interface
const chair: Product = {
    id: "p1",
    name: "Office Chair",
    price: 5000,
    inStock: true,
}

// Why are interfaces preferred in large projects?
// Interfaces can be declared again and typeScript 
// merges their members and it also provides better 
// readability for domain models.