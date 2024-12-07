"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

type FormDataType = {
  name: string;
  website: string;
  email: string;
};

const Section_Five: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    website: "",
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.website || !formData.email) {
      setErrorMessage("All fields are required.");
      return;
    }

    setErrorMessage(null);

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("Missing EmailJS configuration.");
      }

      await emailjs.send(serviceID, templateID, formData, publicKey);

      setSuccessMessage("Message sent successfully!");
      setFormData({ name: "", website: "", email: "" });
    } catch (error) {
      console.error("Sending error:", error);
      setErrorMessage("There was a problem sending the message.");
    }
  };

  return (
    <section
      className="flex max-w-[390px] flex-col gap-8 2xl:max-w-screen-xl lg:max-w-screen-lg xl:max-w-screen-xl md:max-w-[590px] sm:max-w-[460px] scale-[.8] sm:scale-100 xs:max-w-xs lg:flex-row justify-between my-28 2xl:scale-100 2xl:w-11/12 xl:w-11/12 lg:scale-[90%] lg:w-11/12 xl:scale-90 mx-auto md:scale-110"
      id="section5"
      style={{ scrollBehavior: "smooth" }}
    >
      <h1 className="text-6xl w-[330px] 2xl:scale-100 lg:scale-[90%] xl:scale-90 font-bold text-[#1E95E7] leading-[75px]">
        Let&apos;s get
        <br />
        <span className="text-[#E43869]">started.</span>
      </h1>

      <form className="w-[400px] sm:w-auto" onSubmit={handleSubmit}>
        <h1 className="text-2xl w-[405px] sm:w-[460px] md:w-[590px] font-bold text-[#80808E] leading-10">
          My name is{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="YOUR FULL NAME"
            className="bg-[#1F1F23] sm:w-52 w-[145px] md:w-[340px] border-0 border-b-[#45444B] placeholder:text-[#45444B] placeholder:text-sm border-b-[1px] focus:outline-none text-[#1E95E7]"
          />{" "}
          and I
          <br />
          have a{" "}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="WEBSITE, PROBLEM, ISSUE, ETC."
            className="bg-[#1F1F23] w-[220px] sm:w-[17.5rem] md:w-[410px] border-0 border-b-[#45444B] placeholder:text-[#45444B] placeholder:text-sm border-b-[1px] focus:outline-none text-[#E43869]"
          />{" "}
          that
          <br />
          needs help. You can reach me at
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="YOUR EMAIL ADDRESS"
            className="bg-[#1F1F23] w-[295px] sm:w-[345px] border-0 border-b-[#45444B] placeholder:text-[#45444B] placeholder:text-sm border-b-[1px] focus:outline-none text-[#1E95E7]"
          />{" "}
          to get
          <br />
          things started.
        </h1>
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="border px-3 py-2 rounded-xl border-[#45444B] font-bold text-[#80808E] hover:scale-110 duration-150"
          >
            - SEND INFO
          </button>
        </div>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-3">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="text-green-500 text-sm mt-3">{successMessage}</p>
        )}
      </form>
    </section>
  );
};

export default Section_Five;
