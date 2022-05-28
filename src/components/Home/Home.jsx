import React, { createContext, useState } from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import Suggestions from "../Suggestions/Suggestions";
import styles from "./styles";

const Users = createContext();

const Home = () => {
  const [name, setName] = useState("");
  const [flag, setFlag] = useState(true);
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = async () => {
    const res = await fetch(
      `https://api.github.com/search/users?q=${name}&per_page=3`,
      {
        "Content-Type": "application/json",
      }
    );
    const data = await res.json();
    setUsers((users) => {
      return [...users, data.items];
    });
    setFlag(false);
  };
  return flag ? (
    <Box sx={styles.container}>
      <Paper sx={styles.paper}>
        <Typography sx={styles.heading} color="primary" varient="h1">
          Search A GitHub user
        </Typography>
        <TextField
          onChange={handleChange}
          value-={name}
          sx={styles.input}
          placeholder="Search user"
        ></TextField>
        <Button onClick={handleClick}>Go</Button>
      </Paper>
    </Box>
  ) : (
    <Users.Provider value={users}>
      <Suggestions />
    </Users.Provider>
  );
};

export default Home;
export { Users };
