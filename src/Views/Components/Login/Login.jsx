import './login.css'
import CryptoPaisha from '../../../Images/CryptoPaisha.svg'
import CardBgAni from './CardAnimation'



export default function Login() {


    return (
        <div className="main-bg">

            <section className=" m-5">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center align-items-start h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <div className="main">
                                <div className="conainer py-0">
                                    <div className="row Centered">
                                        <div className="container d-md-block d-lg-block d-xl-block d-none ">
                                            <h2 className='text-dark my-5'>
                                                Crypto Card
                                            </h2>

                                            <CardBgAni />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-5 offset-xl-1">
                            <form>
                                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                    <div className="card shadow">
                                        <div className="card-title text-center">

                                            <h2 className="p-3 fw-bold mb-0 mt-4 ">Welcome to Crypto Wallet</h2>
                                            <img src={CryptoPaisha} height='100px' />
                                            <p className="p-0 text-secondary mt-0 mb-0 ">
                                                Dear users, Please use your email address for login.
                                            </p>
                                        </div>
                                        <div className="card-body col-10 mx-auto">
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="username"
                                                    className="form-label small fw-bold mb-1 "
                                                >
                                                    Email
                                                </label>
                                                <input type="text" className="form-control" id="username" />
                                            </div>
                                            <div className="mb-4">
                                                <label
                                                    htmlFor="password"
                                                    className="form-label small fw-bold mb-1"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                />
                                            </div>
                                            <div className="mb-2">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="remember"
                                                />
                                                <label htmlFor="remember" className="form-label">
                                                    Remember Me
                                                </label>
                                            </div>
                                            <div className="d-grid ">
                                                <button type="submit" className="btn btn-primary">
                                                    Login
                                                </button>
                                            </div>
                                            <p className="small fw-normal mt-2 pt-1 mb-0">
                                                By continuing to browse you agree to the storing cookies on
                                                your device to enhance your site experience. To learn more
                                                about how we use cookies, please see our{" "}
                                                <a href="#!" className="link-primary">
                                                    cookies and data privacy policy
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )


}
