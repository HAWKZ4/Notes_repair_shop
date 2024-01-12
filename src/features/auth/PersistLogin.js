import { Outlet, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useRefreshMutation } from "./authApiSlice";
import usePersist from "../../hooks/usePersist";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";

const PersistLogin = () => {
  const [persist] = usePersist();
  const token = useSelector(selectCurrentToken);
  const effectRan = useRef(false);

  const [trueSuccess, setTrueSuccess] = useState(false);

  const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
    useRefreshMutation();

  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== "development") {
      const verifyRefreshToken = async () => {
        console.log("verifying refresh token");

        try {
          // const response =
          await refresh();
          // const {accessToken} = response.data

          // Another flag because isSuccess could be true before set credentials so we need a little bit of time just to ensure                     (refresh could take extra bit of time to finish it's execute)
          setTrueSuccess(true);
        } catch (err) {
          console.error(err);
        }
      };

      if (!token && persist) verifyRefreshToken();
    }

    return () => (effectRan.current = true);
    // eslint-disable-next-line
  }, []);

  let content;
  if (!persist) {
    // persist: no
    console.log("no persist");
    content = <Outlet />;
  } else if (isLoading) {
    // persist: yes, token: no
    console.log("Loading...");
    content = <Outlet />;
  } else if (isError) {
    // persist: true, token: no
    console.log("error");
    content = (
      <p className="errmsg">
        {error.data?.message}
        <Link to="/login">Please Login again</Link>
      </p>
    );
  } else if (isSuccess && trueSuccess) {
    // persist: true , token: yes
    console.log("Success");
    content = <Outlet />;
  } else if (token && isUninitialized) {
    // persist: true , token: yes
    console.log("token and uninit");
    console.log(isUninitialized);
    content = <Outlet />;
  }

  return content;
};

export default PersistLogin;
