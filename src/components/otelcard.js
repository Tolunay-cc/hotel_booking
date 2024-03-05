import Image from "next/image";
import Link from "next/link";

const Otelcard = ({ otelImg, otelName, otelState, otelPuan, otelPrice,otelId }) => {
  return (
    <>
        <div className="w-full h-[285px] border-2 border-gray-200 hover:border-green-300 hover:border-4 rounded-md shadow-md">
          <div className="h-[60%]">
            <Image
              src={otelImg}
              width={1920}
              height={1080}
              quality={100}
              className="h-full rounded-md"
            />
          </div>
          <div className="py-3 px-2">
            <div className="">
              <h1 className=" font-bold text-xl">{otelName}</h1>
              <p className=" font-semibold text-md">{otelState}</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div>
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {otelPuan}
                </span>
              </div>
              <div className="flex flex-col justify-end">
                <span className="text-xl font-medium ">{otelPrice} ₺</span>
                <span className="text-[9px]">Başlayan Fiyatlarla</span>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Otelcard;
