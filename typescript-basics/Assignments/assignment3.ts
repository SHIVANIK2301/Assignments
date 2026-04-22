let student_names:string[]=["Suresh","Mahesh","Naresh"];
let student_marks:number[]=[75,80,82];
for(let i:number=0;i<student_names.length;)
{
    for(let j:number=0;j<student_marks.length;j++)
    {
      console.log(`${student_names[i]}:${student_marks[j]}`)
      i++;
    }
}
//copying the student_marks[] values into new [] named student_addedmarks
let student_addedmarks:number[]=student_marks;
let total=0;
console.log("Upadted Marks:")
for(let n=0;n<student_names.length;)
{
    for(let student_addedmark of student_addedmarks)
{
    //adding each value of newly created added by 10 
    console.log(`${student_names[n]}:${student_addedmark+10}`);
    //calculating sum 
    total+=student_addedmark+10;
    n++;

}

}

console.log(`total of updated marks:${total}`);
console.log(`Number of students:${student_addedmarks.length}`);
let average=total/student_addedmarks.length;
console.log(`Average marks:${total}/${student_addedmarks.length}=${average}`);




