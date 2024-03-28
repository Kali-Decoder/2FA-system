import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { verifyEmail } from "../utils/auth.api";
const IsEmailVarified = () => {
  const SuccessComponent = () => {
    return (
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
            <svg
              aria-hidden="true"
              className="w-12 h-12 text-green-500 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Success</span>
          </div>
          <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            User Verified Successfully <br />{" "}
            <Link to="/login" className="text-blue-400">
              Login Now
            </Link>
          </p>
        </div>
      </div>
    );
  };
  const FailedComponent = () => {
    return (
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900 p-2 flex items-center justify-center mx-auto mb-3.5">
            <svg
              aria-hidden="true"
              className="w-12 h-12 text-red-500 dark:text-red-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 00-.707.293l-7 7a1 1 0 000 1.414l7 7a1 1 0 001.414-1.414L4.414 11H17a1 1 0 000-2H4.414l4.293-4.293A1 1 0 0010 3z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Failed</span>
          </div>
          <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            User Verification Failed <br />{" "}
            <Link to="/register" className="text-blue-400">
              Register Again
            </Link>
          </p>
        </div>
      </div>
    );
  };

  const [isVerified, setIsVerified] = React.useState(false);
  const [verifying, setVerifying] = React.useState(true);
  const params = useParams();
  useEffect(() => {
    setIsVerified(true);
    (async () => {
      try {
        const res = await verifyEmail({ token: params.token, id: params.id });
        if (res.status === 202) {
          setIsVerified(true);
        }
      } catch (err) {
        setIsVerified(false);
      }
      setVerifying(false);
    })();
  }, []);

  return (
    <>
      <div className="container  bg-gray-50 flex justify-center h-[100vh] items-center mx-auto">
        {verifying && <div className="text-2xl font-bold text-blue-500">Verifying...</div>}
        {isVerified && <SuccessComponent />}
        {!isVerified && <FailedComponent />}
      </div>
    </>
  );
};

export default IsEmailVarified;
