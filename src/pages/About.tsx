import React from "react"
import "../styles/Pages.css"
import artistImage from "../assets/photo/artist.webp"

const About: React.FC = () => {
    return (
        <div className="text__container">
            <div>
                <img src={artistImage} className="artist_photo" alt="Masha" />
            </div>
            <p>
                I am a professional artist based in East Finchley, London.
                I have training in the academic tradition, with a focus on 
                perspective, colour theory, and anatomy.
            </p><br />
            <p>
                I love animals and specialise in pet portraiture, working 
                with classical pastel techniques. Each portrait is created 
                with care, skill, and genuine affection for the subject.
            </p><br />
            <p>
                I use high quality materials: Unison soft pastels and 
                Clairefontaine Pastelmat paper. I do not use fixatives 
                under any circumstances, as they alter colour balance, 
                flatten tonal depth, and compromise the integrity of the 
                artwork. In traditional pastel practice, fixatives are 
                avoided to preserve the purity of the medium.
            </p><br />
            <p>
                My aim is not simply to reproduce a photograph, but to 
                capture the unique character and presence of your pet.
            </p>
        </div>
    )
}

export default About
