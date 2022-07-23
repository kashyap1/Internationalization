import * as React from "react";
import { Box, Grid, Paper, IconButton } from "@mui/material";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./Content.module.css";
import TaskCreateForm from "./TaskCreateForm";
import Reducer from "../reducer";
import initialState from "../reducer/initialState";

function Content(props: any) {
  const { t } = useTranslation();
  const [state, dispatch] = React.useReducer(Reducer, initialState);
  const textInput = React.useRef(null);
  return (
    <div className={styles.content}>
      <Grid container spacing={2}>
        <TaskCreateForm
          textInput={textInput}
          error={state.inputError}
          onCreate={(e) => {
            dispatch({ type: "ADD", payload: textInput.current.value });
            textInput.current.value = "";
          }}
        />
        <Grid item xs={12}>
          {!state.tasks.length ? t("no_data_found") : null}
          {state.tasks?.map((task) => (
            <Paper
              variant="outlined"
              square
              key={task}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                p: "16px",
                mb: 1,
                ":hover": {
                  backgroundColor: "primary.lightest"
                }
              }}
              onClick={(e) => {
                dispatch({ type: "SET_TASK", payload: task });
                textInput.current.value = task;
              }}
            >
              <Box sx={{ alignSelf: "center" }}>{task}</Box>
              <div>
                <IconButton
                  color="error"
                  aria-label={t("delete_task")}
                  component="label"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch({
                      type: "DELETE",
                      payload: task
                    });
                  }}
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
