import * as React from "react";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTranslation } from "react-i18next";
import ConfirmationDialog from "./ConfirmationDialog";

function DeleteTask(props: any) {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const onClose = (e) => {
    console.log("i n - C l O S E");
    setOpen(false);
  };
  return (
    <IconButton
      color="error"
      aria-label={t("delete_task")}
      component="label"
      onClick={(e) => setOpen(true)}
    >
      <DeleteIcon />
      <ConfirmationDialog
        title={t("confirm_delete_title")}
        content={t("confirm_delete_message", { item: props.item })}
        open={open}
        onClose={onClose}
        actions={
          <>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
                setOpen(false);
              }}
            >
              {t("close")}
            </Button>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
                props.onDelete(e);
              }}
            >
              {t("delete")}
            </Button>
          </>
        }
      ></ConfirmationDialog>
    </IconButton>
  );
}

export default DeleteTask;
