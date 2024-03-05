import Header from "@/components/header";
import "../app/globals.css";
import Footer from "@/components/footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
    <div className="min-h-[95vh]">
      <Component {...pageProps} key={Math.random().toString(10)} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
