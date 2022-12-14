import { useSelector } from "react-redux"
import { selectCurrentUser } from "./authSlice"
import { Link } from "react-router-dom"
import Alert from 'react-bootstrap/Alert';

const Welcome = () => {
    const user = useSelector(selectCurrentUser)
    //

    const welcome = user ? `Home | logged as ${user}.` : 'Welcom>>'
    //const tokenAbbr = `${token.slice(0, 12)}...`

    const content = (
        <section className="welcome">
            <h3>{welcome}</h3>
            <Link to="/userslist"><Alert><h3>Go to the Users List</h3></Alert></Link>
            <Link to="/noaccess"><Alert><h3>Update your profile</h3></Alert></Link>
            <Link to="/noaccess"><Alert><h3>Go to the Exams module</h3></Alert></Link>
            <Link to="/students"><Alert><h3>Go to the Students module</h3></Alert></Link>
            <Link to="/noaccess"><Alert><h3>Go to Parents module</h3></Alert></Link>
            <Link to="/noaccess"> <Alert><h3>Go to Teachers module</h3></Alert></Link>
            <br />
            <Link to="/noaccess"><Alert><h3>Administrator</h3></Alert></Link>
            <Link to="../"style={{color:"#000"}}>Log out</Link>
        </section>
        
    )

    return content
}
export default Welcome