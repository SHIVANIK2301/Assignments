let paragraph:string="Java is a popular programming language. Java is used for web development, mobile applications, and more.";
const words: string[] = paragraph.split(" ");
//printing words array
console.log(words);
//finding occurence of word"Java" & printing its index
let index:number=0;
for(let i=0;i<words.length;i++)
{
    //console.log(words[i]);
    //checking if word at 'ith' indexis java & printing its index & increasing index count
    if(words[i]=="Java")
    {
       console.log("Java found at index:"+[i]);
       index++; 
       
    }

}
//printing count of java word occurence
console.log(`The word "Java" within string paragraph has been occurred\n${index}times`);