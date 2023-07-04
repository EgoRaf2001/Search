import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersByName,
  searchUsersName,
  setSearchUsersName,
} from "./searchSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: 3,
  marginRight: 7,
}));

const SearchBar = () => {
  const dispatch = useDispatch();
  const selectedName = useSelector(searchUsersName);
  const [text, setText] = useState("");

  useEffect(() => {
    if (selectedName) {
      dispatch(getUsersByName({ selectedName }));
    }
  }, [selectedName]);

  const handleSubmit = () => {
    dispatch(setSearchUsersName(text));
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      <StyledInputBase
        placeholder=" Write Github User Name"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      />

      <Link to="/users">
        <StyledButton
          value={text}
          onClick={handleSubmit}
          variant="contained"
          size="small"
          color="success"
        >
          Search
        </StyledButton>
      </Link>
    </Search>
  );
};

export default SearchBar;
