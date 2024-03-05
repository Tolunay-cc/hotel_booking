import { FaRegPaperPlane } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiMail, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="relative">
      <div class="absolute inset-0 bg-black opacity-50 h-[450px]"></div>
          <div className=" bg-[url('/image/hotel-booking-maldives.webp')] bg-center h-[450px] flex flex-row justify-center items-center">
            <div className="grid grid-cols-2 items-center justify-center ">
              <div className="px-2 w-[70%] mx-auto text-white z-0">
                <p className="text-md font-semibold py-3">Hakkımızda</p>
                <p className="text-lg font-bold">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries,
                </p>
              </div>
              <div>
                <div className="flex flex-col md:flex-row gap-1 justify-start items-start z-0">
                  <div class="relative z-0 w-full md:w-[50%] group">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none   focus:outline-none focus:ring-0 focus:border-white peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_email"
                      class="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="z-0 w-full md:w-[20%] border-white border-2 rounded-md px-2 py-2 hover:bg-white hover:text-black  text-white flex flex-row gap-2 items-center justify-center"
                  >
                    <FaRegPaperPlane className=" text-xl " />
                    <p>Abone Ol</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              <div className="py-6 px-4 text-center  border border-gray-200 rounded-sm">
                <h1>Adres</h1>
                <p> İzmir Alsancak 205 sokak  </p>
              </div>

              <div className="py-6 px-4 text-center border-s-0   border border-gray-200 rounded-sm">
                <h1>Telefon</h1>
                <p>90 553 282 98 79</p>
              </div>

              <div className="py-6 px-4 text-center  border-s-0   border border-gray-200 rounded-sm">
                <h1>E-mail</h1>
                <p>hotebooking@hotmail.com</p>
              </div>

              <div className="py-6 px-4 text-center  border-s-0   border border-gray-200 rounded-sm">
                <h1>Sosyal medya</h1>
               <div className="flex flex-row justify-center items-center gap-3 py-2 text-white">
               <FiTwitter />
               <FiFacebook />
               <FiInstagram />
               <FiMail />
               </div>
              </div>
            </div>
            <div className="py-6 text-center">
              <h1>© Copyright Hotel Booking.</h1>
            </div>
          </div>
        </div>

    </>
  );
};

export default Footer;
