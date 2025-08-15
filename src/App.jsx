import "./reset.css"
import "./App.css"
import { useEffect, useState } from "react";
import { projects } from "./projects/projects";
import { Header } from "./components/Header/Header"
import { Modal } from "./components/Modal/Modal"
import { Quiz } from "./components/Quiz/Quiz";

const initialProject = projects[0];

function App() {
    const [project, setProject] = useState(initialProject);

    useEffect(() => { document.body.classList.add(initialProject); }, [])

    return (
        <>
            <Header project={project} setProject={setProject} />
            <main>
                {project === projects[0] ? <Modal /> : null}
                {project === projects[1] ? <Quiz /> : null}
            </main>
        </>
    )
}

export default App
