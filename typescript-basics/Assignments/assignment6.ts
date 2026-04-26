let x:number=15;
if (x <= 1) 
 { 
    console.log("Not a Prime Number");
 } 
else 
    {
    let isDivisible = false;

    for (let i:number=2;i<x; i++) 
   {
        if (x% i==0)
        {
            isDivisible = true;
            break;
        }
    }

    if (isDivisible=true) 
        {
        console.log(`${x} :Not a Prime Number`);
        } 
        else 
        {
        console.log(`${x}: Is a Prime Number`);
        }
}