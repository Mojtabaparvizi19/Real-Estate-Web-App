import { Navigate, Outlet } from "react-router-dom";
import useDataStore from "../Zstore/store";
import NavBar from "../components/NavBar";

function PrivateRoute() {
  const isLoggedIn = useDataStore((select) => select.isLogged);

  if (!isLoggedIn) return <Navigate to={"/login"} />;
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default PrivateRoute;
