import Otelcard from "@/components/otelcard";
import Link from "next/link";
import { useState } from "react";

const Otels = () => {
  const otels = [
    {
      otelId: "1",
      otelImg: "/image/hotel-booking-rixos-belek.webp",
      otelName: "Rixos Belek",
      otelState: "Antalya",
      otelPuan: "7.50",
      otelPrice: "5000",
      otelRoomType: "Tek Kişilik Oda",
    },
    {
      otelId: "2",
      otelImg: "/image/hotel-booking-ibis.webp",
      otelName: "İbiş Muğla",
      otelState: "Muğla",
      otelPuan: "8",
      otelPrice: "15000",
      otelRoomType: "Aile Odası",
    },
    {
      otelId: "3",
      otelImg: "/image/hotel-booking-cesme-pier.webp",
      otelName: "Çeşme Pier",
      otelState: "İzmir",
      otelPuan: "7.50",
      otelPrice: "7500",
      otelRoomType: "Kral Dairesi",
    },
    {
      otelId: "4",
      otelImg: "/image/hotel-booking-swiss.webp",
      otelName: "Swiss",
      otelState: "Muğla",
      otelPuan: "8",
      otelPrice: "15000",
      otelRoomType: "Suit Oda",
    },
    {
        otelId: "5",
        otelImg: "/image/hotel-booking-swiss.webp",
        otelName: "Swiss",
        otelState: "Muğla",
        otelPuan: "8",
        otelPrice: "10000",
        otelRoomType: "Suit Oda",
      },
      {
        otelId: "6",
        otelImg: "/image/hotel-booking-cesme-pier.webp",
        otelName: "Çeşme Pier",
        otelState: "İzmir",
        otelPuan: "7.50",
        otelPrice: "7500",
        otelRoomType: "Kral Dairesi",
      },
      {
        otelId: "7",
        otelImg: "/image/hotel-booking-ibis.webp",
        otelName: "İbiş Muğla",
        otelState: "Muğla",
        otelPuan: "8",
        otelPrice: "15000",
        otelRoomType: "Aile Odası",
      },
      {
        otelId: "8",
        otelImg: "/image/hotel-booking-rixos-belek.webp",
        otelName: "Rixos Belek",
        otelState: "Antalya",
        otelPuan: "7.50",
        otelPrice: "5000",
        otelRoomType: "Tek Kişilik Oda",
      },
  ];

  const [selectedState, setSelectedState] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedRoomType, setSelectedRoomType] = useState("");

  const filterOtels = (state, priceRange, roomType) => {
    const filteredOtels = otels.filter((otel) => {
      // Eyalet, fiyat aralığı ve oda tipine göre filtreleme yap
      const stateFilter = state === "" || otel.otelState === state;
      const priceFilter =
        priceRange === "" ||
        (parseInt(otel.otelPrice) >= parseInt(priceRange.split("-")[0]) &&
          parseInt(otel.otelPrice) <= parseInt(priceRange.split("-")[1]));
      const roomTypeFilter = roomType === "" || otel.otelRoomType === roomType;

      return stateFilter && priceFilter && roomTypeFilter;
    });

    return filteredOtels.length > 0 ? filteredOtels : null;
  };

  const filteredOtels = filterOtels(
    selectedState,
    selectedPriceRange,
    selectedRoomType
  );

  return (
    <>
      <div className="flex flex-col sm:flex sm:flex-row">
        <div className="w-full  sm:w-[30%] bg-neutral-200">
        <div className="px-2 py-2 bg-gray-100">
            <p className="text-lg font-bold">
            Filtreler
            </p>
        </div>
          <div className="w-full py-2 px-2">
            <select className="w-full  rounded-md py-2" onChange={(e) => setSelectedState(e.target.value)}>
              <option value="">Şehirler</option>
              <option value="Antalya">Antalya</option>
              <option value="Alanya">Alanya</option>
              <option value="İzmir">İzmir</option>
              <option value="Muğla">Muğla</option>

            </select>
          </div>
          <div className="w-full py-2 px-2">
            <select className="w-full  rounded-md py-2" onChange={(e) => setSelectedPriceRange(e.target.value)}>
              <option value="">Tüm Fiyatlar</option>
              <option value="0-5000">0 - 5000 TL</option>
              <option value="5001-10000">5001 - 10000 TL</option>
              <option value="10001-15000">10001 - 15000 TL</option>
        
            </select>
          </div>
          <div className="w-full py-2 px-2">
            <select className="w-full  rounded-md py-2" onChange={(e) => setSelectedRoomType(e.target.value)}>
              <option value="">Tüm Oda Tipleri</option>
              <option value="Tek Kişilik Oda">Tek Kişilik Oda</option>
              <option value="Aile Odası">Aile Odası</option>
              <option value="Kral Dairesi">Kral Dairesi</option>
              <option value="Suit Oda">Suit Oda</option>
       
            </select>
          </div>
        </div>
        <div className="w-[70%] ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {filteredOtels ? (
              filteredOtels.map((item, index) => (
                <>
                <Link href={`/otels/${item.otelId}`} key={item.otelId}>
                  <Otelcard
                    key={item.otelId}
                    otelImg={item.otelImg}
                    otelName={item.otelName}
                    otelPrice={item.otelPrice}
                    otelPuan={item.otelPuan}
                    otelState={item.otelState}
                  />
                  </Link>
                </>
              ))
            ) : (
              <div>Sonuç Bulunamadı.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Otels;
