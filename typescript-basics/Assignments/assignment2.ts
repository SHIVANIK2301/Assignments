let cs:number=687;
let income:number=90000;
let status:boolean=true;
let dti:number=39;
if(cs>750)
    console.log(`Auto Approved loan as credit score:${cs}>750`);
else if(cs>=650)
{
    if(cs<=750)
    {
       console.log(`Need to perform additional checks as credit score:${cs} falls in the range of 650 & 750`)
       console.log("1st income will be checked");
         if(income>=50000)
        {
           console.log(`Loan can be considered as income:${income}>=50000 satisfies income criteria`);
           console.log("Now employment status need to be checked");
           if(status)
          {
             console.log("Loan Approved as employment status is true");
             console.log("Now we need to check DTI ratio criteria");
           if(dti<40)
              console.log(`Yes Loan approved as dti ratio:${dti}<40%`);
          else
              console.log(`NO loan is denied as dti ratio:${dti}>40%`);
        
           }
         else
        console.log("Loan not approved as eployment status is false");
         }
 
    }
   else
    console.log(`Loan can't be approved as income:${income}<50000`);
}
else
    console.log(`Loan denied as credit score:${cs}<650, as it doesn't falls in the range of 650 & 750`);
