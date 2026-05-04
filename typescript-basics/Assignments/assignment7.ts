let sentence:string="Java programming is fun and challenging";
//printing the given input string
console.log(`Input string is:${sentence}`);
//splitting the sinput string by space & output is getting stored in new string array
let splitted:string[]=sentence.split(" ");
//printing new splitted string array
console.log(splitted);
//decalraing count variable to get count of the words
let count:number=0;
//iterating string array to print value & update the count value
for(let i=0;i<splitted.length;i++)
{
    splitted[i];
    //console.log(splitted[i]);
    count++;
}
//printing the total word count
console.log("total word count is:"+ count);