import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactSchema } from "../typings";

type Props = {
  contactData: ContactSchema;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = ({ contactData }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:mail@sample.com?subject=${formData?.subject}&body=${formData?.message}`;
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 sm:text-2xl text-1xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-center">
          <span className="decoration-[#1D4ED8] underline">Lets talk</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#1D4ED8] h-7 w-7 animate-pulse" />
            <p className="text-lg sm:text-1xl md:text-2xl">
              {contactData?.email}
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex sm:space-x-2 sm:flex-row flex-col space-y-2 sm:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="text"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          <button className="bg-[#1D4ED8] py-5 px-10 rounded-md text-white font-bold text-sm sm:text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
