import { useState } from "react";
import { projects } from "./projects/projects";
import { Header } from "./components/Header/Header"
import { Modal } from "./components/Modal/Modal"
import "./reset.css"
import "./App.css"

function App() {
    const [project, setProject] = useState(projects[0]);

    return (
        <>
            <Header project={project} setProject={setProject} />
            <main>
                {project === projects[0] ? <Modal /> : null}
            </main>
        </>
    )
}

export default App
