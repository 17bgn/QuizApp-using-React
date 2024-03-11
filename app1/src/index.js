import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <h2>
      <u>Java Mcq Questions</u>
    </h2>
  );
}

function Question(props) {
  return (
    <div className="question">
      <h4>{props.q1}</h4>
      <label>
        <input type="radio" name={props.name} value={props.op1} />
        {props.op1}
      </label>
      <br />
      <label>
        <input type="radio" name={props.name} value={props.op2} />
        {props.op2}
      </label>
      <br />
      <label>
        <input type="radio" name={props.name} value={props.op3} />
        {props.op3}
      </label>
      <br />
      <label>
        <input type="radio" name={props.name} value={props.op4} />
        {props.op4}
      </label>
      <br />
    </div>
  );
}

function Content() {
  function getResults(event) {
    event.preventDefault(); // Prevent form submission
    let marks = 0;
    //  let a = event.target.props.name.value;
    let form = event.target; // Get the form element
    // Loop through each question and check the selected answer
    let arr = [
      "Java is a programming language",
      "// This is a comment",
      "final",
      "String",
      "Both of the Above",
      "Scanner.nextLine()",
      "false",
      "class MyClass {}",
      "class ChildClass extends ParentClass {}",
      "It is faster than 'String' for concatenation operations.",
    ];
    for (let i = 1; i <= 10; i++) {
      let selectedOption = form.elements[`q${i}`].value; // Get the value of the selected radio button
      if (selectedOption === arr[i - 1]) {
        marks++;
      }
    }
    alert("Total Marks = " + marks + "/10");
  }

  return (
    <form onSubmit={getResults}>
      <div>
        <Question
          q1="1)What is Java?"
          op1="Java is a DBMS"
          op2="Java is a Tool"
          op3="Java is a Web Browser"
          op4="Java is a programming language"
          name="q1"
        />
        <Question
          q1="2)What is the correct way to write a comment in Java?"
          op1="// This is a comment"
          op2="/* This is a comment */"
          op3="// This is a comment /*"
          op4="/* This is a comment // */"
          name="q2"
        />
        <Question
          q1="3)Which keyword is used to define a constant in Java?"
          op1="const"
          op2="final"
          op3="static"
          op4="var"
          name="q3"
        />
        <Question
          q1="4)Which of the following is NOT a primitive data type in Java?"
          op1="int"
          op2="float"
          op3="String"
          op4="boolean"
          name="q4"
        />
        <Question
          q1="5)Which of the following is a valid declaration of a Java array?"
          op1="int[] arr = new int[5];"
          op2="int arr[] = new int[5];"
          op3="Both of the Above"
          op4="None of the Above"
          name="q5"
        />
        <Question
          q1="6)Which of the following is used to read input from the console in Java?"
          op1="System.in.read()"
          op2="Console.read()"
          op3="Scanner.nextLine()"
          op4="BufferedReader.readLine()"
          name="q6"
        />
        <Question
          q1="7)What is the default value of a boolean variable in Java?"
          op1="true"
          op2="false"
          op3="null"
          op4="0"
          name="q7"
        />
        <Question
          q1="8)Which of the following is used to define a class in Java?"
          op1="class MyClass {}"
          op2="class = MyClass {}"
          op3="Class MyClass {}"
          op4="Class = MyClass {}"
          name="q8"
        />
        <Question
          q1="9)What is the correct syntax to inherit a class in Java?"
          op1="class ChildClass extends ParentClass {}"
          op2="class ChildClass inherit ParentClass {}"
          op3="class ChildClass : ParentClass {}"
          op4="class ChildClass implements ParentClass {}"
          name="q9"
        />
        <Question
          q1="10)Which of the following is true about the 'StringBuilder' class in Java?"
          op1="It is synchronized."
          op2="It is faster than 'String' for concatenation operations."
          op3="It is immutable."
          op4="It is a subclass of the 'String' class."
          name="q10"
        />
      </div>
      <br />
      <button>Submit Quiz</button>
    </form>
  );
}

function Footer() {
  return <h1>🙏Thank You🙏</h1>;
}
