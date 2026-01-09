import Header from "../components/Header/Header";
import AboutHero from "../components/AboutHero/AboutHero";
import TabsSection from "../components/TabsSection/TabsSection";
import VisionSection from "../components/VisionSection/VisionSection";
import Banner from "../components/Banner/BannerSection";
import FAQ from "../components/FAQ/FAQQ";
import Footer from "../components/Footer/Footer";
// import wyreflowLogo from "../assets/images/about-homepage-final.png";
import React from "react";


const About = () => {
    return (
        <React.Fragment>
            <Header />
            <AboutHero />
            <TabsSection />
            <VisionSection />
            <Banner />
            <FAQ />
            <Footer />
        </React.Fragment>
    );
};

export default About;

