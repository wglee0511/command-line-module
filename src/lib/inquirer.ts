import inquirer from "inquirer";

inquirer
  .prompt([
    {
      type: "list",
      name: "select module",
      message: "테스트할 모듈을 선택해 주세요",
      choices: ["MBTI", "Select"],
    },
  ])
  .then((answers) => {
    console.log("answers: ", answers);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    console.log(JSON.stringify(error, null, "  "));
  });

export default inquirer;
