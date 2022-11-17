import { useGetUsersQuery } from "./usersApiSlice";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Spinner from 'react-bootstrap/Spinner';

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  let content;
  if (isLoading) {
    content = <Spinner />;
  } else if (isSuccess) {
    content = (
      <section className="users">
        <h4>Users list</h4>
        <Table striped bordered hover  size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>email</th>
              <th>userID</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody >
           {users.data.map((user, i)=>(
          
            <tr key = {user._id} style={{fontSize:"14px"}}>
              <td>{i+1}</td>
              <td style={{fontSize:"14px"}}>{user.userName.slice(0).toUpperCase()}</td>
              <td style={{fontSize:"14px"}}>{user.email}</td>
              <td style={{fontSize:"14px"}}>{user._id}</td>
              <td style={{fontSize:"14px"}}><Link to={`../updateprofile/${user._id}`} style={{color:"#000"}}>update</Link></td>
            </tr>
            
           ))}
          </tbody>
        </Table>

        <Link to="/welcome" style={{color:"#000"}}> Back to Home</Link>
      </section>
    );
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  }

  return content;
};
export default UsersList;
