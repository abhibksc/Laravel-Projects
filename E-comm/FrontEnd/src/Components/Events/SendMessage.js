import ReactDOM from "react-dom";

import {  useNavigate } from "react-router-dom";

export const SendMessage = () => {
  const navigate = useNavigate();



  const handleForm = () => {};

  return ReactDOM.createPortal(
    <>
      <div className="fixed z-10 inset-0 bg-secondary bg-opacity-80 text-opacity-90   shadow-inner  hover:shadow-green-300 h-screen w-screen mx-auto my-auto  ">
        <div className="text-white h-full w-full flex  justify-center items-center  ">
          <div className="flex flex-col text-center gap-2 shadow-lg shadow-secondary bg-blue-500 rounded-md p-3">
            <h1>Message Sent! 🚀</h1>

            <p>
              Thank you for reaching out! We've received your request and our
              team will be in touch with you shortly.
            </p>
            <p>
              Meanwhile, get ready for an amazing event with our talented
              artists!
            </p>
            <button
              onClick={() => navigate("/")}
              className="border w-40 mx-auto p-2 rounded-md bg-blue-700 active:rotate-3 "
            >
              Back to Home{" "}
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("roots")
  );
};
