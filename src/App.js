import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import Welcome from "./features/auth/Welcome";
import RequireAuth from "./features/auth/RequireAuth";
import UsersList from "./features/users/UsersList";
import ResetPassword from "./features/auth/ResetPassword";
import NoAccess from "./features/noAccess/NoAccess";
import UpdateProfile from "./features/users/UpdateProfile";
// import Exams from "./features/exams/index";
import Students from "./features/students/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/welcome" element={<Welcome />} />
          {/* <Route path="exams" element={<Exams />} /> */}
          <Route path="students" element={<Students />} />
          <Route path="userslist" element={<UsersList />} />
          <Route path="noaccess" element={<NoAccess />} />
          <Route path="/updateprofile/:id" element={<UpdateProfile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
