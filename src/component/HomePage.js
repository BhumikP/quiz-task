import {
  Alert,
  Avatar,
  Box,
  Button,
  Paper,
  Snackbar,
  TextField,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeName } from "../feature/userScore";

function HomePage() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [open, setOpen] = useState(false);

  const goDashboard = () => {
    if (userName?.trim() !== "") {
      dispatch(storeName(userName));
      setOpen(false);
      navigate("/dashboard");
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="set-center">
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        key={"top center"}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Please Enter your name to proceed further !
        </Alert>
      </Snackbar>
      <Paper
        elavation={24}
        style={{ padding: "100px", background: "lightgray" }}
      >
        <div>
          <h2>Enter your name to continue</h2>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "50px",
            }}
          >
            <Avatar
              sx={{ bgcolor: deepOrange[500], marginRight: "10px" }}
            ></Avatar>
            <TextField
              id="input-with-sx"
              label="Name"
              variant="standard"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Box>

          <Button variant="contained" onClick={goDashboard}>
            Go to Quiz Dashboard
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default HomePage;
