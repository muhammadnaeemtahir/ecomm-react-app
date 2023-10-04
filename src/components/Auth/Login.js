import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4 col-sm-6 col-12 mx-auto">
                        <h1 className="text-center">Login</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" autocomplete="off" required placeholder="username or email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" autocomplete="off" required placeholder="Enter your password" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg w-100 mb-3">Login</button>
                        </form>
                        <p className="text-cenetr">
                            Don't have an account? <Link to="/register" className="text-primary">Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;