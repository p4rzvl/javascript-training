function applyCoupon(price, coupon){
    if(coupon === "SAVE10"){
        return price * 0.9;
    } else if(coupon === "SAVE20"){
        return price * 0.8;
    } else {
        return price;
    }   
}

console.log(applyCoupon(100, "SAVE10")); // 90