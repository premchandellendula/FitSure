import { AboutCard } from "../components/About/AboutCards"
import { LandingAbout } from "../components/About/LandingAbout"
import BmiCalc from "../components/BMI/BmiCalc"
import Footer from "../components/Footer/Footer"
import { Hero } from "../components/Hero/Hero"
import { NavBar } from "../components/Nav/NavBar"
import { Testimonials } from "../components/Testimonials/Testimonials"
import { Trainers } from "../components/Trainers/Trainers"

export const Home = () => {
    return <div>
        <NavBar />
        <Hero />
        <AboutCard />
        <LandingAbout />
        <Trainers />
        <Testimonials />
        <BmiCalc />
        <Footer />
    </div>
}