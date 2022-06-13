import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();

  return (
    <div className="set-center">
      <Button variant="contained" onClick={() => navigate("/dashboard")}>
        Go to Quiz Dashboard
      </Button>
    </div>
  );
}

export default HomePage;
