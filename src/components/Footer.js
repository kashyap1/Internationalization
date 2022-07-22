import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://gupshup.io/">
        Gupshup
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}. All rights reserved.
    </Typography>
  );
}

export default Copyright;
