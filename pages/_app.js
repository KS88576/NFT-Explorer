import "../styles/globals.css";
import Header from '../components/Header';
import toast, { Toaster } from "react-hot-toast";
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NFT Explorer - Discover Blockchain Assets</title>
        <meta name="theme-color" content="#3B82F6" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Toaster />

      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/popper.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/swiper-bundle.min.js"></script>
      <script src="assets/js/countto.js"></script>
      <script src="assets/js/simpleParallax.min.js"></script>
      <script src="assets/js/gsap.js"></script>
      <script src="assets/js/SplitText.js"></script>
      <script src="assets/js/wow.min.js"></script>
      <script src="assets/js/ScrollTrigger.js"></script>
      <script src="assets/js/gsap-animation.js"></script>
      <script src="assets/js/tsparticles.min.js"></script>
      <script src="assets/js/main.js"></script>
    </>
  );
}