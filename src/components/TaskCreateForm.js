import * as React from "react";
import { useTranslation } from "react-i18next";
import { TextField, Button, Grid } from "@mui/material";

function TaskCreateForm(props: any) {
  const { t } = useTranslation();
  const { onCreate, textInput } = props;
  return (
    <Grid
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onCreate(e);
      }}
      item
      container
      xs={12}
      paddingBottom={8}
      sx={{ justifyContent: "space-evenly", alignItems: "center" }}
    >
      <Grid item xs={10}>
        <TextField
          id="outlined-basic"
          label="Add Task"
          variant="outlined"
          inputRef={textInput}
          fullWidth
          sx={{ paddingRight: "16px" }}
        />
      </Grid>
      <Grid item xs={2}>
        <Button type="submit" variant="contained">
          {t("save")}
        </Button>
      </Grid>
    </Grid>
  );
}

export default TaskCreateForm;
