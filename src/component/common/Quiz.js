import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz({ setStartQuiz, startQuiz, totalQuestions }) {
  let navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [seconds, setSeconds] = useState(20);
  const [question, setQuestion] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [finish, setFinish] = useState(false);
  const [score, setScore] = useState(0);

  const generateRandomQuestion = () => {
    const operators = ["+", "-", "*"];
    const randomOperator = Math.floor(Math.random() * 3);
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);
    setQuestion(
      randomNumber1 + " " + operators[randomOperator] + " " + randomNumber2
    );
  };

  useEffect(() => {
    if (startQuiz) {
      window.history.pushState(null, "", window.location.href);
      window.onpopstate = () => {
        window.history.pushState(null, "", window.location.href);
        alert("You can not go back while quiz is going on");
      };
    }
    generateRandomQuestion();
  }, [step]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const timer = () => {
    setTimeout(() => {
      if (seconds === 0) {
        handleNext();
        setSeconds(20);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  };

  useEffect(() => {
    if (!finish) {
      timer();
    }

    return () => clearTimeout(timer);
  }, [seconds, finish]);

  const handleNext = () => {
    if (eval(question) === Number(inputValue)) {
      setScore(score + 1);
    }
    if (step === totalQuestions) {
      setFinish(true);
    } else {
      clearTimeout(timer);
      setStep((prev) => prev + 1);
      setInputValue("");
      generateRandomQuestion();
    }
  };

  const handleRetake = () => {
    navigate("/dashboard");
    setStartQuiz(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {finish ? (
        <div>
          {" "}
          <h2>Congrats ! You have finished the quiz !!</h2>
          <h1>Your score is {score}</h1>
          <Button
            variant="contained"
            style={{ marginRight: "20px" }}
            onClick={handleRetake}
          >
            Retake Quiz
          </Button>
          <Button variant="contained" onClick={() => navigate("/")}>
            Go to Home page
          </Button>
        </div>
      ) : (
        <div>
          <h3>
            Question No. {step}/{totalQuestions}
          </h3>
          <div className="d-flex">
            <h1>{question}</h1>
            <h4 style={{ marginLeft: "30px", marginTop: "40px" }}>
              Time left :- <b>{seconds} seconds</b>
            </h4>
          </div>
          <div>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={inputValue}
              onChange={handleChange}
            />
          </div>
          <Button
            variant="contained"
            style={{ marginTop: "30px" }}
            onClick={handleNext}
          >
            Next Question
          </Button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
