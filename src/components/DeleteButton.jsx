import { Button } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const DeleteButton = ({ id, setFlag }) => {
  const refDoc = doc(db, "users", id);
  const remove = async () => {
    await deleteDoc(refDoc);
    setFlag((prev) => !prev);
  };
  return (
    <>
      <Button variant="contained" onClick={remove}>
        Remove
      </Button>
    </>
  );
};

export default DeleteButton;
