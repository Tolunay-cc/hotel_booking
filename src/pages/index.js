
import ExplainationSection from "@/components/explainationsection";
import IndexSlider from "@/components/indexslider";
import Otelcard from "@/components/otelcard";
import Oteldetail from "@/components/oteldetail";
import Slider from "@/components/slider";
import Image from "next/image";

export default function Index() {
  return (
  <>
  <div className="min-h-[95vh]">
   <IndexSlider />
   <ExplainationSection />
 
    </div>
  </>
  );
}
