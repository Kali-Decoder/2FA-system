import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
const Deactivate = () => {
  return (
    <>
         <div className="container  flex justify-center h-[100vh] items-center mx-auto">
      <Card
        color="transparent"
        shadow={false}
        className="border-4 rounded-md border-purple-500 p-10"
      >
        <Typography variant="h4" color="blue-gray">
          DeActivate 2FA
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to De-Activate 2-Factor
          Authentication.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6" fullWidth>
            Deactivate 2FA
          </Button>
        </form>
      </Card>
      </div>
    </>
  )
}

export default Deactivate