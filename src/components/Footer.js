import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useTranslation, Trans } from "react-i18next";

function Copyright(props: any) {
  const { t } = useTranslation();
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Trans i18nKey="copyright" values={{ date: new Date().getFullYear() }}>
        <Link color="inherit" href="https://gupshup.io/">
          Gupshup
        </Link>
      </Trans>{" "}
      {t("all_right_reserved")}
    </Typography>
  );
}

export default Copyright;
