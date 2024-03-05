import Otelcard from '@/components/otelcard';
import Oteldetail from '@/components/oteldetail';
import { useRouter } from 'next/router';

const Otels = () => {
    const router = useRouter();
    const { slug } = router.query;
    const otels = [
        {
          otelId: "1",
          otelImg: "/image/hotel-booking-footer.webp",
          otelName: "Rixos blue",
          otelState: "Marmara",
          otelPuan: "7.50",
          otelPrice: "5000",
          otelRoomType: "Tek Kişilik Oda",
        },
        {
          otelId: "2",
          otelImg: "/image/hotel-booking-footer.webp",
          otelName: "Rixos Belek",
          otelState: "Ege",
          otelPuan: "8",
          otelPrice: "15000",
          otelRoomType: "Aile Odası",
        },
        {
          otelId: "3",
          otelImg: "/image/hotel-booking-footer.webp",
          otelName: "Rixos blue",
          otelState: "Marmara",
          otelPuan: "7.50",
          otelPrice: "5000",
          otelRoomType: "Kral Dairesi",
        },
        {
          otelId: "4",
          otelImg: "/image/hotel-booking-footer.webp",
          otelName: "Rixos Belek",
          otelState: "Ege",
          otelPuan: "8",
          otelPrice: "15000",
          otelRoomType: "Suit Oda",
        },
      ];
      const selectedOtel = otels.find(otel => otel.otelId === slug);

 

  return (
    <div>
      <Oteldetail items={otels.find(otel => otel.otelId === slug)} />
    </div>
  );
};

export default Otels;
