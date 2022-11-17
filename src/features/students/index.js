import { useSelector } from "react-redux"
import { selectCurrentUser } from "../auth/authSlice"
import { Link } from "react-router-dom"
import Alert from 'react-bootstrap/Alert';

const Welcome = () => {
    const user = useSelector(selectCurrentUser)
    //

    const welcome = user ? `Signed as ${user}.` : 'Welcome!'
    //const tokenAbbr = `${token.slice(0, 12)}...`

    const content = (
        <section className="welcome">
            <p>{welcome}</p>
            <Link to="/userslist"><Alert><h3>Go to the Users List</h3></Alert></Link>
            <Link to="/noaccess"><Alert><h3>Update your profile</h3></Alert></Link>
            <Link to="/noaccess"><Alert><h3>Go to the Exams module</h3></Alert></Link>
            <Link to="/noaccess"><Alert><h3>Go to the Students module</h3></Alert></Link>
            <Link to="/noaccess"><Alert><h3>Go to Parents module</h3></Alert></Link>
            <Link to="/noaccess"> <Alert><h3>Go to Teachers module</h3></Alert></Link>
            <br></br>
            <Link to="/noaccess"><Alert><h3>Administrator</h3></Alert></Link>

        </section>
    )

    return content
}
export default Welcome