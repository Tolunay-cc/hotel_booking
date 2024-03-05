import { FaCarOn } from "react-icons/fa6";
import { MdRoomService } from "react-icons/md";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { PiAirplaneTiltBold } from "react-icons/pi";
import { TbDiscount } from "react-icons/tb";
import { RiCoupon2Line } from "react-icons/ri";
const ExplainationSection = () => {
  return (
    <>
      <div className="bg-black/50">
        <div className="w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-1 py-16">

          <div className="flex flex-row  p-3 gap-3 text-white">
            <div>
              <FaCarOn className=" text-5xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Havalimanına Servis</h1>
              <p className="text-lg font-semibold">
                Lorem ipsum proin gravida velit auctor alueut aenean sollicitu
                din, lorem auci elit consequat ipsutissem niuis sed odio sit
                amet a sit amet.
              </p>
            </div>
          </div>

          <div className="flex flex-row  p-3 gap-3 text-white">
            <div>
              <MdRoomService className=" text-5xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Oda Servisleri</h1>
              <p className="text-lg font-semibold">
                Lorem ipsum proin gravida velit auctor alueut aenean sollicitu
                din, lorem auci elit consequat ipsutissem niuis sed odio sit
                amet a sit amet.
              </p>
            </div>
          </div>

          <div className="flex flex-row  p-3 gap-3 text-white">
            <div>
              <MdOutlineLocalLaundryService className=" text-5xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Kuru Temizleme</h1>
              <p className="text-lg font-semibold">
                Lorem ipsum proin gravida velit auctor alueut aenean sollicitu
                din, lorem auci elit consequat ipsutissem niuis sed odio sit
                amet a sit amet.
              </p>
            </div>
          </div>

          <div className="flex flex-row  p-3 gap-3 text-white">
            <div>
              <PiAirplaneTiltBold className=" text-5xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Mil Kazanın</h1>
              <p className="text-lg font-semibold">
                Lorem ipsum proin gravida velit auctor alueut aenean sollicitu
                din, lorem auci elit consequat ipsutissem niuis sed odio sit
                amet a sit amet.
              </p>
            </div>
          </div>

          <div className="flex flex-row  p-3 gap-3 text-white">
            <div>
              <TbDiscount className=" text-5xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">İndirim Kuponları</h1>
              <p className="text-lg font-semibold">
                Lorem ipsum proin gravida velit auctor alueut aenean sollicitu
                din, lorem auci elit consequat ipsutissem niuis sed odio sit
                amet a sit amet.
              </p>
            </div>
          </div>

          <div className="flex flex-row  p-3 gap-3 text-white">
            <div>
              <RiCoupon2Line className=" text-5xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">İndirim Kuponları</h1>
              <p className="text-lg font-semibold">
                Lorem ipsum proin gravida velit auctor alueut aenean sollicitu
                din, lorem auci elit consequat ipsutissem niuis sed odio sit
                amet a sit amet.
              </p>
            </div>
          </div>

    



 


     


        </div>
      </div>
    </>
  );
};

export default ExplainationSection;
