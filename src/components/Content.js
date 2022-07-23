import * as React from "react";
import { Grid, Paper, IconButton } from "@mui/material";
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
              sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
              onClick={(e) => {
                dispatch({ type: "SET_TASK", payload: task });
                textInput.current.value = task;
              }}
            >
              <div>{task}</div>
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
