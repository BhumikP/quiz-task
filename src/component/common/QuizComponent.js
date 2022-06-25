import { Button } from "@mui/material";
import React, { useState } from "react";
import Quiz from "./Quiz";

function QuizComponent() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [noOfQuestions, setNoOfQuestions] = useState(1);

  return (
    <div className="set-center">
      {!startQuiz && (
        <div>
          <Button
            variant="contained"
            onClick={() => setStartQuiz(true)}
            style={{ margin: "auto", marginBottom: "30px" }}
          >
            Start Quiz
          </Button>
          <div>
            <label htmlFor="points">
              Choose Number of questions (between 1 and 10):
            </label>
          </div>
          <div>
            <input
              type="range"
              id="points"
              name="points"
              default="1"
              value={noOfQuestions}
              onChange={(e) => setNoOfQuestions(e.target.value)}
              min="1"
              max="10"
            />
          </div>
          {/* <h3>{noOfQuestions}</h3> */}
          <ul style={{ margin: "auto", marginTop: "20px" }}>
            <li>You will be given {noOfQuestions} questions one by one.</li>
            <li>Each question contains 1 point.</li>
            <li>
              20 seconds timer will run once you start the quiz,If you are
              unable to answer in 20 seconds, you will be moved to next
              question.
            </li>
          </ul>
        </div>
      )}
      {startQuiz && (
        <Quiz
          setStartQuiz={setStartQuiz}
          startQuiz={startQuiz}
          totalQuestions={Number(noOfQuestions)}
        />
      )}
    </div>
  );
}

export default QuizComponent;
