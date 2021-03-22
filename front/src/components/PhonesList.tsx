import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Phone } from "types";
import axios from "axios";

import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Fab from "@material-ui/core/Fab";

import PhoneCard, { PhoneCardLoadingTemplate } from "components/PhoneCard";
import EmptyState from "assets/illustrations/emptyState1.svg";
import PhoneModal from "components/PhoneModal";
import Zoom from "@material-ui/core/Zoom";

const PhonesList = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  async function getPhones() {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/phones`
      );
      setPhones(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.error(error);
    }
  }
  const [newPhoneOpen, setNewPhoneOpen] = useState(false);

  async function addPhone(phone: Phone) {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/phones`,
        phone
      );
      setPhones((prev) => [{ ...data }, ...prev]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }
  useEffect(() => {
    getPhones();
  }, []);

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        {isLoading &&
          [...Array(8)].map((_: any, i: number) => (
            <PhoneCardLoadingTemplate key={`loadingTemp-${i}`} />
          ))}
        {!isLoading &&
          !isError &&
          phones.length > 0 &&
          phones?.map((x, i) => (
            <PhoneCard
              onClick={() => history.push(`/phones/${x.id}`)}
              key={`phone-${i}`}
              phone={x}
              marginBottom={12}
            />
          ))}
        {!isLoading && !isError && phones.length === 0 && (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="30px 0px"
          >
            <img width={250} src={EmptyState} style={{ marginBottom: 24 }} />
            <Typography align="center" variant="h5">
              Oops!
            </Typography>
            <Typography
              align="center"
              variant="subtitle1"
              style={{ marginBottom: 12 }}
            >
              There are no phones yet!
            </Typography>
            <Link
              component="button"
              variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Add new phone
            </Link>
          </Box>
        )}
        {!isLoading && isError && (
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={() => getPhones()}
          >
            RETRY
          </Button>
        )}

        <PhoneModal
          open={newPhoneOpen}
          onClose={() => setNewPhoneOpen(false)}
          onComplete={(phone) => {
            addPhone(phone);
            setNewPhoneOpen(false);
          }}
        />
      </Box>
      <Fab
        color="primary"
        style={{ position: "fixed", bottom: 24, right: 24 }}
        onClick={() => setNewPhoneOpen(true)}
      >
        <AddIcon />
      </Fab>
    </>
  );
};
export default PhonesList;
