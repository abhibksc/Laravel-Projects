import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SendMessage } from "./SendMessage";

const PersonalDetails = () => {
  const [open, setOpen] = useState(false);
  const formData = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gbz7p8n",
        "template_gphnf4d",
        formData.current,
        "zKUkAksW83w8yG50Q"
      )
      .then(
        (result) => {
          setOpen(true);
          formData.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">
        Let's Get Personal 🤗
      </h1>

      <form ref={formData} onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name, Please 📝
          </label>
          <input
            type="text"
            id="name"
            name="from_name"
            placeholder="Your Name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Contact Number 📞
          </label>
          <input
            type="tel"
            id="phone"
            name="from_phone"
            placeholder="Contact Number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address 📧
          </label>
          <input
            type="email"
            id="email"
            name="from_email"
            placeholder="Email Address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Let's Go! 🚀
          </button>
        </div>
      </form>

      {open && <SendMessage />}
    </div>
  );
};

export default PersonalDetails;
