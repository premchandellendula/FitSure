import { AboutCard } from "../components/AboutCards"
import { Hero } from "../components/Hero/Hero"
import { NavBar } from "../components/Nav/NavBar"

export const Home = () => {
    return <div>
        <NavBar />
        <Hero />
        <AboutCard />
    </div>
}