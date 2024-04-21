import { useDispatch } from "react-redux";
import { FirebaseService } from "../services/firebase";
import { useEffect } from "react";
import { auth } from ".";
import { setProfile } from "../store/Features/ProfileSlice";
import { setLoading } from "../store/Features/loadingSlice";
import PropTypes from "prop-types";

const GetUser = ({ isAdmin }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    FirebaseService.attachUserDocumentListener(
      isAdmin ? "admins" : "users",
      (user) => {
        if (user) {
          dispatch(setProfile(user));
        } else {
          dispatch(setProfile(null));
        }
        console.log("falsing");
        dispatch(setLoading(false));
      }
    );

    return () => {
      dispatch(setLoading(false));
      FirebaseService.detachUserDocumentListener();
    };
  }, [auth.currentUser]);
  return null;
};

export default GetUser;

GetUser.propTypes = {
  isAdmin: PropTypes.bool,
};
