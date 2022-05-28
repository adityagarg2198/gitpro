import React, { useContext } from "react";
import { Users } from "../Home/Home";
import { Box, Typography, Paper, Avatar, Button } from "@mui/material";
import styles from "./styles";

const Suggestions = () => {
  const users = useContext(Users);
  return (
    <>
      {users[0].map((user) => {
        return (
          <Box sx={styles.container}>
            <Paper sx={styles.paper}>
              <Avatar src={user.avatar_url} sx={styles.image} />
              <Box sx={styles.lowerContainer}>
                <Typography sx={styles.heading} color="primary">
                  {user.login}
                </Typography>
                <a href={user.html_url} target="_blank">
                  <Button>Profile</Button>
                </a>
              </Box>
            </Paper>
          </Box>
        );
      })}
    </>
  );
};

export default Suggestions;
