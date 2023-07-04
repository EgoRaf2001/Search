import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { SearchAllUsers, setCurrentUser } from "../searchBar/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchUsersList = () => {
  const Users = useSelector(SearchAllUsers);
  const dispatch = useDispatch();
 
  return (
    <div style={{ display: "inline-flex", flexFlow: " row wrap" }}>
      {Users.map((user) => {
        return (
          <div key={user.id}>
            <Card
              sx={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                justifyContent: "center",
                width: 300,
                margin: 10,
                height: 200,
              }}
            >
              <CardContent sx={{ marginTop: 5 }}>
                <Typography variant="h5" component="div">
                  {user.login}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center", marginTop: 4 }}>
                <Link to={`/user/${user.login}`} >
                  <Button
                    variant="contained"
                    sx={{ textTransform: "none" }}
                    size="medium"
                    onClick={() => {
                        dispatch(setCurrentUser(user.login));
                      }}
                  >
                    Click to view Profile
                  </Button>
                </Link>
              </CardActions>
            </Card>{" "}
          </div>
        );
      })}
    </div>
  );
}

export default SearchUsersList;