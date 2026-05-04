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
//splitting the given string by space & storing it's output in new string array
console.log("***************************************************");
//declaring new result array to store reversed words
let result:string[]=[];
//iterating new splitted string array
for(let i=0;i<splitted.length;i++)
{
    //reversing the each word of array
    let reversedword:(string|undefined)= splitted[i]?.split("").reverse().join("");
    //console.log(reversedword);
    //chehcking if words are reversed & pushing into new result string array if reversed
    if(reversedword)
    {
        //pushing reverse words into result array
        result.push(reversedword);
        
    }
}
//printing new reversed word array
console.log(`Reverse words of string is:\n${result.join(" ")}`);
console.log("****************************************************************************");

let upper: string = "";
for (let splitteds of splitted)
{
   upper = upper + splitteds.substring(0, 1).toUpperCase() + splitteds.substring(1) + " ";
}
console.log("Uppercase Sentence is : " + upper.trim());
