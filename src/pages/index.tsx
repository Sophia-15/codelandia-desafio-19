import Head from "next/head";
import { AppSection } from "../components/AppSection";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HomeSection } from "../components/HomeSection";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { PricingSection } from "../components/PricingSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Rachi</title>
      </Head>
      <Header />
      <main>
        <HomeSection />
        <HowItWorksSection />
        <AppSection />
        <PricingSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}