import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import BookIcon from "@mui/icons-material/Book";
import SwitchLeftIcon from "@mui/icons-material/SwitchLeft";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import { useDispatch, useSelector } from "react-redux";
import {
  currentUser,
  currentUserData,
  getFinallyUsers,
} from "../searchApp/searchSlice";
import { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: 200,
  height: 50,
  fontSize: 20,
}));
export function UserData() {
  const userName = useSelector(currentUser);
  const user = useSelector(currentUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFinallyUsers(userName));
  }, [userName]);
  return (
    <div id={user.id} style={{ display: "inline-flex" }}>
      <div style={{ margin: 150 }}>
        <Avatar src={user.avatar_url} sx={{ width: 200, height: 200 }} />
        <div style={{ fontSize: 25 }}>{user.name || "I don't have a name"}</div>
        <div style={{ display: "inline-flex" }}>
          <CorporateFareIcon sx={{ mr: 1 }}></CorporateFareIcon>
          <div style={{ marginTop: 2 }}>{user.company || "I do not work"}</div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <PlaceIcon sx={{ mr: 1 }}></PlaceIcon>
          <div style={{ marginTop: 2 }}>
            {user.location || "location not written"}
          </div>
        </div>
        <div style={{ display: "inline-flex" }}>
          <EmailIcon sx={{ mr: 1 }}></EmailIcon>
          <div style={{ marginTop: 2 }}>
            {" "}
            {user.email || "email not written"}
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "center" }}>
        <Stack
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap={2}
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          marginLeft={20}
        >
          <Item>
            <div style={{ display: "inline-flex" }}>
              <BookIcon></BookIcon>Repos
            </div>{" "}
            <div>{user.public_repos}</div>
          </Item>

          <Item>
            <div style={{ display: "inline-flex" }}>
              <PeopleIcon></PeopleIcon>Followers
            </div>
            <div>{user.followers}</div>
          </Item>
          <Item>
            <div style={{ display: "inline-flex" }}>
              <PersonAddIcon></PersonAddIcon>Following
            </div>{" "}
            <div>{user.following}</div>
          </Item>
          <Item>
            <div style={{ display: "inline-flex" }}>
              <SwitchLeftIcon></SwitchLeftIcon>Gists
            </div>{" "}
            <div>{user.public_gists}</div>
          </Item>
        </Stack>
      </div>
    </div>
  );
}
