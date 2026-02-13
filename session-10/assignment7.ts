enum PayState {
    INITIATED = "INITIATED",
    SUCCESS = "SUCCESS",
    FAILED = "FAILED"
}

const PayHandler: Record<PayState, () => void> = {
    [PayState.INITIATED]: () => {
        console.log("Payment Initiated");
    },
    [PayState.SUCCESS]: () => {
        console.log("Payment Successful");
    },
    [PayState.FAILED]: () => {
        console.log("Payment Failed");
        
    }
}

function processPay(state:PayState){
    PayHandler[state]?.();
}

processPay(PayState.SUCCESS)
// processPay("Success") // Argument of type '"Success"' 
                         // is not assignable to parameter of type 'PayState'.

// Why enums are better than magic strings?
// Enums make our code complie safe as we cannot pass aribitrary string as argument


const test = "JavaScript For Beginners"
.toLocaleUpperCase()
.split(" ")
.join("-")