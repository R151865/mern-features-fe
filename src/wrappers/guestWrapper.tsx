import { useEffect } from "react";
import { getCookie } from "../config/cookies";
import { useNavigate } from "react-router-dom";

export default function guestWrapper<P extends object>(
  Component: ComponentType<P>,
) {
  return function HOC(props: P) {
    const navigate = useNavigate();
    const token = getCookie("token");

    useEffect(() => {
      if (token) {
        navigate("/", { replace: true });
      }
    }, [token, navigate]);


    return <Component {...props} />;
  };
}
