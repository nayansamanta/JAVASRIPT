
const programing =[ "ruby", "java" , "c++" , "nodejs"]

programing.forEach(function (item){
    //console.log(item);
})

programing.forEach( (item2) =>{
   // console.log(item2);
})

//  object in array 

const programing_language =[
    {
        languagename :"javascript",
        filename:"js"
    },
    {
        languagename :"python",
        filename:"py"
    },
    {
        languagename :"ruby",
        filename:"rb"
    },
    {
        languagename :"c++",
        filename:"cpp"
    }
]

programing_language.forEach( (item3) =>{
    console.log(item3);
})
programing_language.forEach( (item3) =>{
    console.log(item3.languagename);
})

