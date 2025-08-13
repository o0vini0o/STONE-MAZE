import { useState } from "react";

const Contact = () => {
  const [openForm, setOpenForm] = useState(true);
  return (
    <div className="container flex flex-col max-w-md mx-auto my-10 space-y-5">
      <h2 className="text-2xl font-bold">Contact Us: </h2>
      {openForm && (
        <div>
          <form className="grid grid-cols-1 space-y-3">
            <label className="space-y-1">
              <span className="inline-block w-16 font-bold ">Name: </span>
              <input
                className="input w-full"
                type="text"
                name="name"
                placeholder="name"
              />
            </label>
            <label className="space-y-1">
              <span className="inline-block w-16 font-bold">Email: </span>
              <input
                className="input w-full"
                type="text"
                name="email"
                placeholder="example@mail.com"
              />
            </label>
            <label className="space-y-1">
              <div className="font-bold">Message:</div>
              <textarea
                name="message"
                className="textarea w-full h-64"
                placeholder="If you have any comments or suggestions,please send us a message"
              ></textarea>
            </label>
            <button
              type="submit"
              className="btn btn-primary w-32 justify-self-end"
              onClick={() => {
                setOpenForm(false);
              }}
            >
              send
            </button>
          </form>
        </div>
      )}
      {!openForm && (
        <div className="toast toast-center toast-middle">
          <div className="alert alert-success flex flex-col">
            <span>Message sent successfully. Thank you for your message!</span>
            <button
              type="submit"
              className="btn btn-ghost w-32"
              onClick={() => {
                setOpenForm(true);
              }}
            >
              return
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
