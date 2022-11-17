import { Link } from "react-router-dom"


const Public = () => {

    const content = (
        <section className="public">
            <header>
                <h3 className="headerMain">ST. Francis of Assi Kaliini Sec. School</h3>
            </header>
            <main>
                <p></p>
                <p>&nbsp;</p>
                <Link to="/login"  style={{color:'#000'}}>Login</Link> <br></br>
                <Link to="/resetpassword" style={{color:'#000'}}>Password Reset</Link>
            </main>
            <footer>
                
            </footer>
        </section>

    )
    return content
}
export default Public