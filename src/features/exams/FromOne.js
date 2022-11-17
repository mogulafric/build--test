

const UpdateProfile = ({userID}) => {
   
    const content = (
        <section className="login">
            <p>back  | home</p>
            <h3>Update your profile</h3>

            <form >
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="Enter email"
                    autoComplete="off"
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter - password"
                    id="password"
                   
                    required
                />
                <button className="btn btn-primary" >Sign In</button>
            </form>
         
        </section>
    )

    return content
}
export default UpdateProfile