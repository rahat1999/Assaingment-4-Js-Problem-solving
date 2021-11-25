
//==============================================================function deliveryCost(quantity){
    function deliveryCost(quantity){
    //if you input negitive Number You will get Error //
    if(quantity <0 || typeof quantity !='number'|| quantity !=quantity.toFixed(0)){
        return 'Please Enter Positive Integer'; 
    }
    //Main Task//

    if(quantity <=100){
        totalDelivaryCost =quantity*100;
    }
    else if(quantity<=200 && quantity >100){ 
        const second200DeliveryCost =quantity-100;
        totalDelivaryCost =(100 * 100) +(second200DeliveryCost * 80);
    }
    else{
        const restDelivaryCost = quantity - 200;
        totalDelivaryCost = (100*100) + (100*80) + (restDelivaryCost * 50);
    }
    return totalDelivaryCost; //all products dalivery cost
}
//To See Output
const needQuantity =deliveryCost(201);
console.log(needQuantity);