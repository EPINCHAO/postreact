import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import ShowModal from "../components/ShowModal";
import DeleteButton from "../components/DeleteButton";

const FireStore = () => {
  const [users, setUser] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hasDog, setHasDog] = useState(false);
  const [flag, setFlag] = useState(false);

  const usersCollectionRef = collection(db, "users");

  const addUser = async () => {
    await addDoc(usersCollectionRef, {
      name: name,
      age: age,
      hasDog: hasDog,
    });
  };

  const getUser = async () => {
    const data = await getDocs(usersCollectionRef);
    const userData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    console.log(userData);
    setUser(userData);
  };

  useEffect(() => {
    getUser();
  }, [flag]);

  const submitForm = async (e) => {
    e.preventDefault();
    await addUser();
  };

  return (
    <div>
      <h1>New user</h1>

      <form onSubmit={submitForm}>
        <TextField
          type="text"
          id="name"
          label="name"
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          type="number"
          id="age"
          label="age"
          variant="standard"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <div>
          <Switch checked={hasDog} onChange={() => setHasDog(!hasDog)} />
          <label htmlFor="switch">Has a dog</label>
        </div>
        <Button type="submit" variant="contained">
          send
        </Button>
      </form>

      <h1>Users</h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Has Dog</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">
                  {row.hasDog ? "true" : "false"}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">
                  <ShowModal id={row.id} setFlag={setFlag} />
                </TableCell>
                <TableCell align="right">
                  <DeleteButton id={row.id} setFlag={setFlag}></DeleteButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FireStore;
