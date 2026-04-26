interface employee{
    name:string;
    base_salary:number;
    experienceyear:number;
    yearendrating:number;
}
let employees:employee[]=
[
   {name:"Alice Johnson",base_salary:75000.0,experienceyear:5.1,yearendrating:4.2},
   {name:"Bob Smith",base_salary:68000.0 ,experienceyear:3.2,yearendrating:3.8},
   {name:"Carol Davis",base_salary:82000.0,experienceyear:7.1,yearendrating:4.5},
   {name:"David Brown",base_salary:90000.0,experienceyear:10.2,yearendrating:2.5},
   {name:"Eva Green",base_salary:60000.0,experienceyear:2.4,yearendrating:3.5}
];
console.log("Employee Data:");
console.table(employees);
function hike_percent(data:employee): number
{
    let vpay:number=0;
    let bonus:number=0;
    let reward:number=0;
    //let hikevalue:number=0;
    if(data.yearendrating>=4.0)
    {
       vpay=15.0;
       bonus=1500;
      
    }
    /*else if (data.yearendrating >= 3.0)
{
    if (data.yearendrating < 4.0)
    {
        vpay = 10.0;
        bonus = 1200;
    }
} */
    else if (data.yearendrating >= 3.0 && data.yearendrating < 4.0) 
    {
        vpay = 10.0;
        bonus = 1200;
    } 
    else
    {
        vpay=3.0;
        bonus=300;
       // hikevalue=hike(data,vpay,bonus);
    }
    
function hike(data: employee, vp: number, bonus: number): number 
{
    let reward = 0;

    if (data.experienceyear >= 5) {
        reward = 5000;
    }

    //return (data.base_salary * vp) + bonus + reward;
    return (data.base_salary * vp / 100 )+bonus+reward;
}
    const hikevalue= hike(data,vpay,bonus);
    const hikepercent=(hikevalue/data.base_salary)*100;
    return hikepercent;
}
console.log("Employees got Hike of amount:");
/*console.table(employees.map(emp => ({
    Name: emp.name,
    Hike: hike_percent(emp).toFixed(2) + "%"
  })));*/
console.table(
  employees.map(function(employee) {
    return {
      Name: employee.name,
      Hike: Number(hike_percent(employee).toFixed(2))
      
    };
  })
);
