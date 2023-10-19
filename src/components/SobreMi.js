import { Button } from 'react-bootstrap';
import { useScrollEffect } from '../hooks/useScrollEfect';
import myResume from '../resume/FedericoRedolfo.pdf'

const SobreMi = () => {
    
    const [visible] = useScrollEffect("scrollEffectAbout")

    function handleDownload() {
        const link = document.createElement("a")
        link.href = myResume;
        link.download = "FedericoRedolfo.pdf"
        link.click()
    }

    return (
        <div className={`container-sobreMi scrollEffectAbout ${visible && "visible"} `} id='aboutMe'>
            <h1>About me</h1>
            <p>
                My name is Federico Redolfo and I am a front-end and back-end web developer, I am currently residing
                in Tandil and finishing my Tudai degree at Unicen University,
                eager to learn and work on the projects that I have to participate in.
            </p>
            <p>
                My goals are to participate in the creation of services and applications
                that are useful, enjoying the process since I am passionate about
                learning and improving in the projects that I am involved in.
            </p>
            <p>
                I consider myself a proactive person, a great team worker and with the
                ability to identify and solve various problems.
            </p>
            <Button className="button-resume" onClick={handleDownload}>
                Download Resume
            </Button>
        </div>
    )
}

export default SobreMi