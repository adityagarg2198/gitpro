import React from "react";
import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import styles from "./styles";

const Home = () => {
  return (
    <Box sx={styles.container}>
      <Paper sx={styles.paper}>
        <Typography sx={styles.heading} color="primary" varient="h1">
          Search A GitHub user
        </Typography>
        <TextField sx={styles.input} placeholder="Search user"></TextField>
        <Button>Go</Button>
      </Paper>
    </Box>
  );
};

export default Home;
