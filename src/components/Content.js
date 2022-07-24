import * as React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import styles from "./Content.module.css";
import TaskCreateForm from "./TaskCreateForm";
import Reducer from "../reducer";
import initialState from "../reducer/initialState";
import DeleteTask from "./DeleteTask";
import { LineWeight } from "@mui/icons-material";

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
            if (
              !state.inputError &&
              !state.tasks.includes(textInput.current.value)
            )
              textInput.current.value = "";
          }}
        />
        {!!state.tasks.length && (
          <Grid item xs={12} sx={{ textAlign: "left", display: "flex" }}>
            <Typography sx={{ mr: 1, fontWeight: 600 }}>
              {t("total")}
            </Typography>
            <Typography variant="body1">
              {t("tasks", { count: state.tasks.length })}
            </Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          {!state.tasks.length ? <Box>{t("no_data_found")}</Box> : null}
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
                console.log("on click called");
                dispatch({ type: "SET_TASK", payload: task });
                textInput.current.value = task;
              }}
            >
              <Box sx={{ alignSelf: "center" }}>{task}</Box>
              <div>
                <DeleteTask
                  item={task}
                  onDelete={(e) => {
                    dispatch({
                      type: "DELETE",
                      payload: task
                    });
                    textInput.current.value = "";
                  }}
                />
              </div>
            </Paper>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default Content;
