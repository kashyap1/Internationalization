import * as React from "react";
import { TextField, Button, Grid, Paper, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./Content.module.css";

function Content(props: any) {
  const textInput = React.useRef(null);
  const [tasks, setTasks] = React.useState([]);
  const [currentTask, setCurrentTask] = React.useState(null);
  return (
    <div className={styles.content}>
      <Grid container spacing={2}>
        <Grid
          item
          container
          xs={12}
          paddingBottom={8}
          sx={{ justifyContent: "space-evenly", alignItems: "center" }}
        >
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Add Task"
              variant="outlined"
              inputRef={textInput}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={(e) => {
                setTasks((value) => {
                  if (currentTask) {
                    console.log(value, currentTask, textInput.current.value);
                    const index = value.findIndex((val) => val === currentTask);
                    value[index] = textInput.current.value;
                    setCurrentTask(null);
                    return [...value];
                  } else {
                    return value.concat(textInput.current.value);
                  }
                });
                textInput.current.value = "";
              }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {tasks?.map((task) => (
            <Paper
              variant="outlined"
              square
              key={task}
              sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
              onClick={(e) => {
                setCurrentTask(task);
                textInput.current.value = task;
              }}
            >
              <div>{task}</div>
              <div>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default Content;
