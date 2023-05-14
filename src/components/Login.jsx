import React from "react";

const Login = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 ">
            <div className="border w-100 m-auto text-center p-5">
              <form action="">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="email p-3 m-2"
                  type="email"
                  placeholder="enter your email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="password p-3 m-2"
                  type="password"
                  placeholder="enter your password"
                />
                <button
                  // onClick={handleLogin}
                  className="btn btn-info w-75 p-2 mt-3"
                >
                  Login
                </button>
                <p className="p-2">
                  <small className="text-info">
                    are you new? register here..
                  </small>
                </p>
              </form>
            </div>
          </div>
          {/* <div className="col-md-6"></div> */}
          {/* <SocialLoginBtn></SocialLoginBtn> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
