import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import { mediaBreakpoints } from "assets/theme";
import { Phone } from "types";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";

const PhoneModal: React.FC<{
  phone?: Phone;
  open: boolean;
  onClose: () => void;
  onComplete: (phone: Phone) => void;
  title?: string;
}> = ({ phone, open, onClose, onComplete, title = "NEW PHONE" }) => {
  const [editingPhone, setEditingPhone] = useState<Phone>({});
  const isMobile = useMediaQuery(mediaBreakpoints.mobile);

  useEffect(() => {
    if (phone) setEditingPhone({ ...phone });
  }, [phone]);

  return (
    <Dialog open={open} onClose={onClose} fullScreen={isMobile} keepMounted>
      <DialogTitle style={{ textAlign: "center" }}>{title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="normal"
          label="Name"
          type="text"
          variant="outlined"
          fullWidth
          value={editingPhone?.name}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event) => {
            setEditingPhone((prev) => ({ ...prev, name: event.target.value }));
          }}
        />
        <TextField
          margin="normal"
          variant="outlined"
          label="Manufacturer"
          type="text"
          fullWidth
          value={editingPhone?.manufacturer}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event) => {
            setEditingPhone((prev) => ({
              ...prev,
              manufacturer: event.target.value,
            }));
          }}
        />

        <TextField
          margin="normal"
          variant="outlined"
          label="Color"
          type="text"
          fullWidth
          value={editingPhone?.color}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event) => {
            setEditingPhone((prev) => ({ ...prev, color: event.target.value }));
          }}
        />
        <FormControl fullWidth variant="outlined">
          <InputLabel>Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={editingPhone?.price}
            type="number"
            onChange={(event) => {
              setEditingPhone((prev) => {
                const newValue = +event.target.value;
                return {
                  ...prev,
                  price: newValue >= 0 ? newValue : 0,
                };
              });
            }}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
        <TextField
          margin="normal"
          variant="outlined"
          label="Image URL"
          type="text"
          fullWidth
          multiline
          value={editingPhone?.imageURL}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event) => {
            setEditingPhone((prev) => ({
              ...prev,
              imageURL: event.target.value,
            }));
          }}
        />
        <TextField
          margin="normal"
          variant="outlined"
          label="Screen"
          type="text"
          fullWidth
          value={editingPhone?.screen}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event) => {
            setEditingPhone((prev) => ({
              ...prev,
              screen: event.target.value,
            }));
          }}
        />
        <TextField
          margin="normal"
          variant="outlined"
          label="Processor"
          type="text"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={editingPhone?.processor}
          onChange={(event) => {
            setEditingPhone((prev) => ({
              ...prev,
              processor: event.target.value,
            }));
          }}
        />
        <TextField
          margin="normal"
          variant="outlined"
          label="RAM"
          type="number"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          value={editingPhone?.ram}
          onChange={(event) => {
            setEditingPhone((prev) => {
              const newValue = +event.target.value;
              return { ...prev, ram: newValue >= 0 ? newValue : 0 };
            });
          }}
        />
        <TextField
          multiline
          margin="normal"
          variant="outlined"
          label="Description"
          type="text"
          fullWidth
          value={editingPhone?.description}
          rows={6}
          rowsMax={14}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event) => {
            setEditingPhone((prev) => ({
              ...prev,
              description: event.target.value,
            }));
          }}
        />
      </DialogContent>
      <DialogActions style={{ padding: "8px 24px" }}>
        <Button onClick={onClose} fullWidth variant="outlined" color="primary">
          Cancel
        </Button>
        <Button
          fullWidth
          variant="contained"
          disabled={!editingPhone}
          onClick={() => onComplete(editingPhone)}
          color="primary"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default PhoneModal;
/* 
export interface BaseItem {
  name: string;
  manufacturer: string;
  description: string;
  color: string;
  price: number;
  imageURL: string;
  screen: string;
  processor: string;
  ram: number;
}
*/
