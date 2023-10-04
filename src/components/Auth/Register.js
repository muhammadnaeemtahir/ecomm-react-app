import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4 col-sm-6 col-12 mx-auto">
                        <h1 className="text-center">Register</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" autocomplete="off" required placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" autocomplete="off" required placeholder="name@email.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" autocomplete="off" required placeholder="Enter your password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="password" autocomplete="off" required placeholder="Renter your password" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg w-100 mb-3">Register</button>
                        </form>
                        <p className="text-cenetr">
                            Already have an account? <Link to="/login" className="text-primary">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;