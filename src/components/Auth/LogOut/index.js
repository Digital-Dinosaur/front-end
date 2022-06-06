import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../../../store/auth";
import { useEffect } from "react"


function LogOut(){
  let dispatch = useDispatch();

  // const navigate = useNavigate();
  // const auth = useSelector((state) => {
  //   return state.auth;
  // })

  // useEffect(() => {
  //   return navigate("/signIn")
  // }, [auth.signedIn, navigate])


  //use dispatch to call logout reducer
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOutUser())
  }

  return (
    <Button href='signin' onClick={handleLogOut} color="primary">
      Log Out
    </Button>
  )

}

export default LogOut;