import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
    const jwt_token = Cookies.get("jwt");
    if (jwt_token === undefined) {
        window.location.href = "/login";
    }
  return {...props.children};
}   

export  {ProtectedRoute};
