// Assignment 2
// Create a function activateUser that accepts only objects having isActive: boolean .
// Create another function that requires both id and email .
// Try passing invalid objects and observe TypeScript errors.

interface UserCredintials{
    id: number,
    email: string
}

function activateUser<T extends{isActive: boolean}>(value:T){
    console.log(value.isActive)
}

function setUserCredintials<T extends UserCredintials>(user:T): string{
    return `user: ${user.id}, new email: ${user.email}`
}