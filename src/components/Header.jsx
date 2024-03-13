import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {user ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button component={Link} to="/new" color="inherit">
                New Post
              </Button>

              <Button component={Link} to="/" color="inherit">
                All Post
              </Button>

              <Button component={Link} to="/users" color="inherit">
                Users
              </Button>
              <Button
                onClick={() => setUser(false)}
                to="/login"
                color="inherit"
              >
                Logout
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
