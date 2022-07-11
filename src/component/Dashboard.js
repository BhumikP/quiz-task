import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import QuizComponent from "./common/QuizComponent";

function Dashboard() {
  const { name } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (name === "") {
      navigate("/");
    }
  }, [name]);
  return (
    <div>
      {" "}
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          // color: "grey",
          background: "lightgrey",
        }}
      >
        Welcome to the Dashboard "{name}" !
      </h1>
      <Grid container>
        <Grid item xs={6}>
          <QuizComponent />
        </Grid>
        <Grid item xs={6}>
          <QuizComponent />
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
