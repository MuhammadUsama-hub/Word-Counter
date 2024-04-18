#! /usr/bin/env node
import inquirer from "inquirer";
let wordsCounter = (para: string): number[] => {
  para = para.trim(); // removes leadind /trailing white spaces
  let subString = para.split(" "); // converting string to array
  let updateSubString = subString.filter((e) => e !== ""); //creates new array with empty strings
  let charCounts = 0;
  updateSubString.forEach((e) => (charCounts += e.length)); // counts total paragraph characters
  return [updateSubString.length, charCounts]; // finally the words counts done!
};
//asking data from user
let answers = await inquirer.prompt([
  { message: "Write a paragraph : ", type: "string", name: "para" },
]);
let results = wordsCounter(answers.para);
console.log(
  `Paragraph contains ${results[0]} Words & ${results[1]} Characters.`
);
