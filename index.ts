#! /usr/bin/env node

import inquirer from "inquirer";
let todos: string[] = [];
let loop = true;

while(loop){
    const answer:{
        TODO:string,
        addMore: boolean
    } = await inquirer.prompt([
      {  type: "input",
        name:"TODO",
        message:"What do you want to add in your todo list?"
    },
    {
        type:"confirm",
        name:"addMore",
        message:"Do you want to add more in your todo list?"
    },
    ]);
    const{TODO,addMore} = answer;
    loop = addMore;
    if(TODO){
        todos.push(TODO);
    }else{
        console.log("Please add a valid input");
    }

}
if (todos.length>0){
    console.log("your todo list is: ");
    todos.forEach(todo=>{
        console.log(todo);
        
    });
}   
else{
        console.log("no items found in your todo list");
        
    }