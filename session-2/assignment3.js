let role = "ADMIN";

switch (role) {
    case "ADMIN":
        console.log("Full access");
        break;
    case "USER":
        console.log("Limited access");
        break;
    case "MANAGER":
        console.log("Moderete access");
        break;
    default:
        console.log("Invalid Role");
}