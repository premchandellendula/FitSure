import { AboutCard } from "../components/About/AboutCards"
import { LandingAbout } from "../components/About/LandingAbout"
import { Hero } from "../components/Hero/Hero"
import { NavBar } from "../components/Nav/NavBar"

export const Home = () => {
    return <div>
        <NavBar />
        <Hero />
        <AboutCard />
        <LandingAbout />
    </div>
}