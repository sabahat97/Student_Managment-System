#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
 // first condidates register their account to access the login page

const answers = await inquirer.prompt(
    [
        {
            name : "register",
            type :"confirm",
            message :"Register your account first"
        }
    ]
 );
    let registerEmail = await inquirer.prompt(
        [
            {
                name : "name1",
                type :"input",
                message:"What's you first name."
            },
            {
                name :"name2",
                type : "input",
                message :"What's your last name."

            },
            {
                name :"email",
                type : "input",
                message : "Enter your email!"
            },
            {
                name :"date",
                type : "input",
                message :"Enter your date of birth (DD/MM/YY)"
            
            },
            {
                name :"country",
                type :"list",
                message :"Country?.",
                choices :["Karachi", "Lahore", "Islamabad"]
            },
            {
                name :"password",
                type :"password",
                message :"Create your password!"
            },
         
        
        ]
    );

 
 console.log(chalk.yellow("Registered Successfully"))
let login = await inquirer.prompt(     // login your account to access the form
    [
        {
            name :"login",
            type :"input",
            message :"Login Your email adddress!"
        },
        {
            name: "password",
            type: "password",
            message: "Enter your password to login"
        }
    ]

);
if (login.login === registerEmail.email && login.password === registerEmail.password){ 
  console.log(chalk.green("login successfully"))   //checking if condidates email and password is equal to registered email and password


console.log (chalk.white("Welcome to abc Course from xyz Campus\nFill the form with complete detail"))
 
 let candidates = await inquirer.prompt(
    [
        {
            name :"Student FullName",
            type :"input",
            message :"Enter your Fullname"
        },
        {
            name :"Course",
            type:"checkbox",
            message :"Select at least two course",
            choices:["Digital Marketing","Mobile Web Marketing","Search Engine Optimization(SEO)","Google Ads"]
            
        },
        {
            name :"Cnic",
            type :"input",
            message :"National Identity Number!"

        },
        {
            name :"Qualification",
            type :"input",
            message :"Add Your Education!"
        },
        {
            name :"Course fee",
            type :"checkbox",
            message:"which course u apply",
            choices:["Digital Marketing fee 1000","Mobile Web Marketing fee 1000","Search Engine Optimization(SEO) fee 1000","Google Ads"]
            
        },
        {
            name :"Fee",
            type :"number",
            message :"Payment method\n Enter your account number / iban number"
        },
        {
            name :"Submitted Your Form",
            type :"input",
            message:"Enter to submitt your form"
        }
    ]
 )
 console.log ("Sucessfully Submitted Your Form")
let view = await inquirer.prompt(
    [
        {
            name :"ViewForm",
            type:"list",
            message :"View Your Form.",
            choices:["View"]
        }
    ]
);
   if (view.ViewForm){
    console.log(candidates);
}
} else {console.log (chalk.red("wrong email or password !"));
}
