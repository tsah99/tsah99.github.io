import About from "./components/About";
import Experience from "./components/Experience";
import Miscellaneous from "./components/Miscellaneous";
import Projects from "./components/Projects";

export const tabs: { [key: string]: React.ReactNode } = {
    'About': <About />,
    'Experience': <Experience />,
    'Projects': <Projects />,
    'Miscellaneous': <Miscellaneous />
};