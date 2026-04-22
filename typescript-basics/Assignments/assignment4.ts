let transactions:number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000];
for(let transaction of transactions)
   console.log(transaction);
let credited_number:number=0;
let debited_number:number=0;
let credited_total:number=0;
let debited_total:number=0;
let suspicious:number=0;
for(let transaction of transactions)
{
    if(Number(transaction)>0)
    {
      //console.log(`Credited Transaction Amount of Rs:${transaction[t]}`);
      credited_number++;
      //console.log(`Value at index ${t}:${transactions[t]}`);
      credited_total+=Number(transaction);
      //console.log(credited_total);
      if(Number(transaction)>10000)
      {
        console.log(`Credited Amount:Rs.${transaction} is suspicious as it's exceeding the Bank Account's Credit limit(+10000)`);
         suspicious++;
      }
      
    }
    else 
    {
        //console.log(`Debited Transaction Amount of Rs:${transaction}`);
        debited_number++;
        //console.log(`value at index ${t}:${transactions[t]}`);
        debited_total+=Number(transaction);
        //console.log(debited_total);
        if(Number(transaction)<-10000)
        {
            console.log(`Debited Amount:Rs.${transaction}is suspicious as it's exceeding the Bank Account's Debit limit(-10000)`);
            suspicious++;
        }
    }

}
    console.log(`Total Credited Transactions:${credited_number}`);
    console.log(`Total Debited Transactions:${debited_number}`);
    console.log(`Total Credited Amount:${credited_total}`);
    console.log(`Total Debited Amount:${debited_total}`);
    let remaining_amount:number=credited_total-debited_total;
    console.log(`Total Amount Remaining in Bank Account is:Rs${remaining_amount}`);
    console.log(`Total Number of Suspecious Transactions is:${suspicious}`);



