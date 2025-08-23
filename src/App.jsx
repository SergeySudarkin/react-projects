import "./reset.css"
import "./App.css"
import { useEffect, useState } from "react";
import { projects } from "./projects/projects";
import { Header } from "./components/Header/Header"
import { Modal } from "./components/Modal/Modal"
import { Quiz } from "./components/Quiz/Quiz";
import { UsersWrapper } from "./components/UsersWrapper/UsersWrapper";
import { CurrencyConvertor } from "./components/CurrencyConvertor/CurrencyConvertor";
import { PhotoCollection } from "./components/PhotoCollection/PhotoCollection";

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
                {project === projects[2] ? <UsersWrapper /> : null}
                {project === projects[3] ? <CurrencyConvertor /> : null}
                {project === projects[4] ? <PhotoCollection /> : null}
            </main>
        </>
    )
}

export default App
