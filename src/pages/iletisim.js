"use client";
import { useState } from "react";
import toast from "react-hot-toast";

const iletisim = () => {

  const [nameSurname, setNameSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [click, setClick] = useState(false);

  if (click) {
  
    if (!nameSurname || !email || !phone || !message || nameSurname == "" || email == "" || phone == "" || message == "") {
        toast.error("bilglerinizi kontrol edin")
        window.alert("bilglerinizi kontrol edin")
        setClick(false)
    } else {
        window.alert("Bilgileriniz başarı ile alındı")
        setNameSurname("")
        setEmail("")
        setPhone("")
        setMessage("")
        setClick(false)
    }
  }

 

  return (
    <div className="contact">
      <div className="contact-header">
        <h2
          className="dark:text-darkmode-text dark:border-gray-500
                    font-bold text-2xl px-2  w-full py-3 hover:border-gray-400 duration-300 text-center"
        >
          {"İletişim"}
        </h2>
        <hr />
        <div>
          <div className="flex flex-col gap-4 w-full py-2">
            <div className="w-1/2 mx-auto">
              <label
                htmlFor="nameSurname"
                className="dark:text-darkmode-text
                                    form-label inline-block mb-2 text-gray-700 "
              >
                İsim
                <span> </span>
                Soy İsim
                <span className="text-primary-red px-1 text-2xl">*</span>
              </label>
              <input
                value={nameSurname}
                onChange={(e) => setNameSurname(e.target.value)}
                type="text"
                autoComplete="off"
                className="
                                dark:bg-darkmode-soft-black
                                dark:text-white
                                dark:border-gray-700
                                dark:focus:border-gray-500
                                 block
                                 w-full
                                 px-3
                                 py-1.5
                                 text-base
                                 font-normal
                                 text-gray-700
                                 bg-white bg-clip-padding
                                 border border-solid border-gray-300
                                 rounded
                                 
                                 ease-in-out
                                 m-0
                                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                  "
                id="adSoyad"
              />
            </div>

            <div className="w-1/2 mx-auto">
              <label
                htmlFor="nameSurname"
                className="dark:text-darkmode-text
                                   form-label inline-block mb-2 text-gray-700 "
              >
                Mail
                <span className="text-primary-red px-1 text-2xl">*</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                autoComplete="off"
                className="
                                dark:bg-darkmode-soft-black
                                dark:text-white
                                dark:border-gray-700
                                dark:focus:border-gray-500
                                 block
                                 w-full
                                 px-3
                                 py-1.5
                                 text-base
                                 font-normal
                                 text-gray-700
                                 bg-white bg-clip-padding
                                 border border-solid border-gray-300
                                 rounded
                                 
                                 ease-in-out
                                 m-0
                                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                  "
                id="adSoyad"
              />
            </div>

            <div className="w-1/2 mx-auto">
              <label
                htmlFor="nameSurname"
                className="dark:text-darkmode-text
                                   form-label inline-block mb-2 text-gray-700 "
              >
                Telefon
                <span className="text-primary-red px-1 text-2xl">*</span>
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                autoComplete="off"
                className="
                                dark:bg-darkmode-soft-black
                                dark:text-white
                                dark:border-gray-700
                                dark:focus:border-gray-500
                                 block
                                 w-full
                                 px-3
                                 py-1.5
                                 text-base
                                 font-normal
                                 text-gray-700
                                 bg-white bg-clip-padding
                                 border border-solid border-gray-300
                                 rounded
                                 
                                 ease-in-out
                                 m-0
                                 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                  "
                id="telefon"
              />
            
            </div>

            <div className="w-1/2 mx-auto">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="dark:text-darkmode-text
                                   form-label inline-block mb-2 text-gray-700"
              >
                Mesajınız
                <span className="text-primary-red px-1 text-2xl">*</span>
              </label>
              <textarea
                value={message}
                onChange={(e) => {
                  if (e.target.value.length <= 500) {
                    setMessage(e.target.value);
                  } else {
                    toast.error(t("maxMsgLength500"));
                  }
                }}
                className="
                                dark:bg-darkmode-soft-black
                                dark:text-white
                                dark:border-gray-700
                                dark:focus:border-gray-500
                                   block
                                   w-full
                                   px-3
                                   py-1.5
                                   text-base
                                   font-normal
                                   text-gray-700
                                   bg-white bg-clip-padding
                                   border border-solid border-gray-300
                                   rounded
                                   ease-in-out
                                   resize-none
                                   m-0
                                   focus:text-gray-700 focus:bg-white  focus:outline-none"
                id="exampleFormControlTextarea1"
                rows="5"
              ></textarea>
            </div>
            <div className="w-full justify-center flex"></div>
            <div className="w-full justify-center flex">
              <button
              onClick={()=> setClick(true)}
                type="button"
                className="
                                    rounded-md inline-block  h-10 px-16  bg-blue-500 text-white
                                    font-bold text-sm leading-tight 
                                    outline-none  duration-150 ease-in-out tracking-[2px]"
              >
                Gönder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default iletisim;
