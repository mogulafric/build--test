import { Link } from "react-router-dom"

const Public = () => {

    const content = (
        <section className="public">
            <header>
                <h1>ST. Francis of Assi Kaliini Sec. School</h1>
            </header>
            <main>
                <p>School system.</p>
                <p>&nbsp;</p>
                <address>
                    School<br />
                    Call<br />
                    Email, <br />
                    <a href="#">(254),phone</a>
                </address>
            </main>
            <footer>
                <Link to="/login">Login</Link> <br></br>
                <Link to="/resetpassword">Password Reset</Link>
            </footer>
        </section>

    )
    return content
}
export default Public