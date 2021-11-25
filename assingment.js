
/* ===================================================================
                     PROBLEM NO-01 (seerToMon)

         --------------- proved Seer get Mon---------------
 =================================================================// */
                

function  seerToMon(ser){

//if you input any negitive Number You will get Error //
    if(ser<0){
        return 'Please Enter Positive Number'; 
    }
    let mon =ser*0.025; // 1 mon devided by 40 seer = 0.025 mon //
    return mon;
}
const totalSeer = seerToMon(500);
console.log(totalSeer);


/*==================================================================
                     PROBLEM NO-2 (totalSales)

          ---------get total price of total sales---------
=====================================================================*/

//Task Requirment : 
                         //  perShartPrice = 100;
                        //  perPantPrice = 200;
                       //  perShoePrice = 500;

function totalSales (shirt, pant,shoe){
  //Main Task:
    //if you input any invalid number in Three products then You will get Error //  
    if(shirt < 0 || pant < 0 || shoe < 0 || typeof shirt !='number' || typeof pant != 'number' || typeof shoe !='number' || shirt != shirt.toFixed(0)|| pant!=pant.toFixed(0) || shoe!= shoe.toFixed(0)) {  
        return 'Please Enter Positive Integer.'; 
    }
    let totalAmountOfThreeProducts = (shirt * 100) +(pant * 200) +(shoe * 500);
    return totalAmountOfThreeProducts;
}
//To See Output
const totalPrice = totalSales(13,12,10);
console.log(totalPrice);


/* ======================================================================
                                PROBLEM NO-03 (deliveryCost)

                 ----------- get total delivery cost of your order --------------
    =============================================================================== */


//Task Requirment :
                    // 1 to 100 per pice Shirt DeliveryCost =100;
                   // 101 t0 200 per pice Shirt DeliveryCost =80;
                  // 200 to rest per pice Shirt DelivaryCost =50;


function deliveryCost(quantity){

    //if you input negitive Number You will get Error //
    if(quantity <0 || typeof quantity !='number'|| quantity != quantity.toFixed(0)){
        return 'Please Enter Positive Integer'; 
    }
    //Main Task//

    if(quantity <=100){
        totalDelivaryCost =quantity*100;
    }
    else if(quantity<=200 && quantity >100){ 
         const upTo100Quantity = 100 * 100;
         const upTo200Quantity = quantity-100;
         totalDelivaryCost = upTo100Quantity +(upTo200Quantity * 80);
    }
    else{
        const upTo100Quantity = 100 * 100;
        const upTo200Quantity = 100*80;
        const after200Quantity = quantity - 200;
        totalDelivaryCost = upTo100Quantity + upTo200Quantity + (after200Quantity * 50);
    }
    return totalDelivaryCost; //all products delivery cost
}
//To See Output
const needQuantity =deliveryCost(201);
console.log(needQuantity);


/* ===========================================================================
                        PROBLEM NO-04 (perfectFriend) 

    --------get a first name from an array who has name length 5---------
 ==============================================================================*/


function perfectFriend(names){
       
    if(typeof names != 'object'){
        return 'Please Provide an Array';   // Error massage
    }
  
    // Main Task
    let largeIndexName =[0];
    for(const largeName of names){
        if(largeName.length ==5){
            largeIndexName=largeName;
            return largeIndexName;
        }
        
    }
    
    return '5 length name not found';   //Error Massage
}
// To see Output
let friendNames= ['anikjsk','sakib' ,'shariful','rakib','rahat','sujon','khaliil','jalil']
const bestFriedName =perfectFriend(friendNames);
console.log(bestFriedName);