import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "components/Navbar";
import { useHistory } from "react-router";

import { useParams } from "react-router-dom";
import { Phone } from "./types";
import axios from "axios";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";
import PropertyText from "components/PropertyText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import PhoneModal from "components/PhoneModal";

const PhoneDetail = () => {
  const [phone, setPhone] = useState<Phone>();
  const [isLoading, setIsLoading] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [editOpen, setEditOpen] = useState(false);

  const classes = useStyles();
  const history = useHistory();
  const urlParams = useParams<any>();

  const handleEdit = async (phone: Phone) => {
    try {
      setIsLoading(true);
      const { data: editedPhone } = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/phones/${phone.id}`,
        phone
      );
      setPhone(editedPhone);
      setIsLoading(false);
      setEditOpen(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };
  const handleDelete = async (id?: string) => {
    try {
      setIsLoading(true);
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/phones/${id}`);
      setEditOpen(false);
      history.push("/");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };
  const handleActionsClose = (e: any) => {
    setAnchorEl(null);
    e.stopPropagation();
  };
  useEffect(() => {
    async function getPhoneData(id: number) {
      try {
        setIsLoading(true);

        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/phones/${id}`
        );
        setPhone(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
        history.push("/");
      }
    }
    if (urlParams.id) getPhoneData(urlParams.id);
  }, [urlParams, history]);
  return (
    <>
      <Navbar onBack={() => history.push("/")} />
      <Container fixed maxWidth="sm" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} style={{ padding: 0 }}>
            <Box display="flex" justifyContent="flex-end">
              {!isLoading && phone && (
                <>
                  <IconButton
                    className={classes.options}
                    onClick={(e: any) => {
                      setAnchorEl(e.currentTarget);
                      e.stopPropagation();
                    }}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleActionsClose}
                  >
                    <MenuItem
                      key={"Edit"}
                      selected={false}
                      onClick={() => {
                        setEditOpen(true);
                        setAnchorEl(null);
                      }}
                    >
                      <ListItemIcon style={{ minWidth: 36 }}>
                        <EditIcon />
                      </ListItemIcon>
                      <ListItemText primary="Edit" />
                    </MenuItem>
                    <MenuItem
                      key={"Delete"}
                      selected={false}
                      onClick={() => {
                        if (window.confirm("Delete this phone?"))
                          handleDelete(`${phone?.id}`);
                      }}
                    >
                      <ListItemIcon style={{ minWidth: 36 }}>
                        <DeleteIcon />
                      </ListItemIcon>
                      <ListItemText primary="Delete" />
                    </MenuItem>
                  </Menu>
                  <PhoneModal
                    title="EDIT PHONE"
                    phone={phone}
                    open={editOpen}
                    onClose={() => {
                      setEditOpen(false);
                    }}
                    onComplete={handleEdit}
                  />
                </>
              )}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="center">
              {!isLoading && (
                <>
                  <img
                    alt={`phoneImg-${phone?.id}`}
                    src={phone?.imageURL}
                    style={{ width: 276, borderRadius: 12 }}
                  />
                </>
              )}
              {isLoading && (
                <Skeleton
                  variant="rect"
                  width={276}
                  height={276}
                  animation="wave"
                  style={{ borderRadius: 12 }}
                />
              )}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              {!isLoading && (
                <Typography variant="subtitle1" className={classes.bluegrey}>
                  {phone?.manufacturer}
                </Typography>
              )}
              {isLoading && <Skeleton animation={"wave"} height={18} />}
              {!isLoading && (
                <Typography variant="h3" className={classes.bluegrey}>
                  {phone?.name}
                </Typography>
              )}
              {isLoading && <Skeleton animation={"wave"} height={34} />}
              <Divider style={{ marginTop: 8, marginBottom: 8 }} />
              <PropertyText label="PRICE" info={`$${phone?.price}`} />
              <PropertyText label="COLOR" info={phone?.color} />
              <PropertyText label="SCREEN" info={phone?.screen} />
              <PropertyText label="PROCESSOR" info={phone?.processor} />
              <PropertyText
                label="RAM"
                info={phone ? `${phone.ram}` : undefined}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <PropertyText
              label="DESCRIPTION"
              info={phone?.description}
              templatingLines={8}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default PhoneDetail;

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: "0 0 12px 12px",
  },
  bluegrey: { color: "#3C3E5F" },
  options: {
    width: 30,
    height: 30,
    padding: 0,
  },
}));
