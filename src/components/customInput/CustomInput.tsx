import { TextField } from "@mui/material";
import { useField } from "formik";
import { Item } from "../../utilities/item.utilities";
import { Grid } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";

interface Props {
  label: string;
  name: string;

  value: number | string;
  size: number;
  type: string;
  id: string;
}

export const CustomInput = ({ size, value, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Grid item xs={size}>
        <Box sx={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
          <div>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              {...field}
              {...props}
              variant="outlined"
              sx={{ width: "100%", height: "100%" }}
              className={meta.touched && meta.error ? "input-error" : ""}
            />
          </div>
          {meta.touched && meta.error && (
            <div className="error">{meta.error}</div>
          )}
        </Box>
      </Grid>
    </>
  );
};
