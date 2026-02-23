// Assignment 4
// 1.Create a constant adminUser .
// 2.Create a type from it using typeof .
// 3.Add a new property and observe how the type changes automatically.


const admin = {
    id: 0,
    name: "admin",
    email: "admin@test.com",
    role: "admin",
    isActive: true
}

type adminType = typeof admin;

function sayHi(a: adminType){
    console.log(`Hello ${a.name}`);
    
}

sayHi(admin)

// Property 'isActive' is missing in type '{ id: number; name: string; email: string; role: string; }'
// but required in type 'AdminUser'.