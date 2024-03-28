import React,{useState} from "react";
import { Button } from "@material-tailwind/react";
import { toast } from "react-hot-toast";
import { verifyOTP } from "../utils/auth.api";
import { useParams } from "react-router-dom";
const VerifyOTP = () => {
    const params = useParams();
    const [formData, setFormData] = useState({
        otp1: "",
        otp2: "",
        otp3: "",
        otp4: "",
        otp5: "",
        otp6: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let otp = formData.otp1 + formData.otp2 + formData.otp3 + formData.otp4 + formData.otp5 + formData.otp6;
        let id = toast.loading("Verifying OTP...");
        let response = await verifyOTP({ otp , id : params.id });
        if (response.message) {
            toast.success(response.message, { id });
            window.location.href = "/";
        }

    }


  return (
    <>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div class="flex flex-col items-center justify-center text-center space-y-2">
              <div class="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div class="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email ba**@dipainhouse.com</p>
              </div>
            </div>

            <div>
              <form action="" method="post">
                <div class="flex flex-col space-y-16">
                  <div class="flex flex-row items-center justify-between mx-auto w-full max-w-md">
                    <div class="w-20 mx-2 h-16 ">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name="otp1"
                        onChange={(e)=>handleChange(e)}
                        id=""
                      />
                    </div>
                    <div class="w-20 mx-2 h-16 ">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name="otp2"
                        onChange={(e)=>handleChange(e)}
                        id=""
                      />
                    </div>
                    <div class="w-20 mx-2 h-16 ">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name="otp3"
                        onChange={(e)=>handleChange(e)}
                        id=""
                      />
                    </div>
                    <div class="w-20 mx-2 h-16 ">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name="otp4"
                        onChange={(e)=>handleChange(e)}
                        id=""
                      />
                    </div>
                    <div class="w-20 mx-2 h-16 ">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name="otp5"
                        onChange={(e)=>handleChange(e)}
                        id=""
                      />
                    </div>
                    <div class="w-20 mx-2 h-16 ">
                      <input
                        class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        name="otp6"
                        onChange={(e)=>handleChange(e)}
                        id=""
                      />
                    </div>
                  </div>

                  <div class="flex flex-col space-y-5">
                    <div>
                      <Button className="mt-6" onClick={(e)=>handleSubmit(e)} fullWidth>
                        Verify Account
                      </Button>
                    </div>

                    <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p>{" "}
                      <a
                        class="flex flex-row items-center text-blue-600"
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resend
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyOTP;
