import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../../store/auth';

function LogOut() {
  let dispatch = useDispatch();

  //use dispatch to call logout reducer
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOutUser());
  };

  return (
    <Button href="signin" onClick={handleLogOut} color="primary">
      Log Out
    </Button>
  );
}

export default LogOut;
