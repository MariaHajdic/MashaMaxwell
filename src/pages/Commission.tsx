import React from "react"
import "../styles/Pages.css"

// draggable=false
// robots.txt for indexing prohibition

const Commission: React.FC = () => {
    return (
        <div className="text__container">
            <h3>Photo Requirements</h3><br />
            <p>
                The quality of the photo you provide directly affects the 
                quality of the portrait. A good reference photo should be 
                sharp, well-lit, and large enough to allow close inspection 
                of details like the eyes and nose. Natural daylight works 
                best, either outside or near a window. Avoid harsh sunlight 
                or deep shadows, and never use a flash.
            </p><br />
            <div className="photo__example">
                <div className="example__column">
                    <img src="/example_images/do1.jpg" alt="Good example" />
                    <p className="label__overlay">Good reference picture</p>
                </div>
                <div className="example__column">
                    <img src="/example_images/dont1.jpg" alt="Bad example" />
                    <p className="label__overlay">The dog's face is too blurry, 
                        making it difficult to use as a reference</p>
                </div>
            </div>
            <br />
            <p>
                Try to take the photo at your pet’s eye level. Looking down 
                from above can distort proportions, especially at a close distance. 
                Get low to the ground and hold the camera at the level of 
                your pet's head. It often helps using a treat and having your 
                pet sit or lie down.
            </p><br />
            <div className="photo__example">
                <div className="example__column">
                    <img src="/example_images/do2.jpg" alt="Good example" />
                    <p className="label__overlay">This picture can be used</p>
                </div>
                <div className="example__column">
                    <img src="/example_images/dont2.jpg" alt="Bad example" />
                    <p className="label__overlay">The proportions are distorted</p>
                </div>
            </div>
            <br />
            <p>
                Choose an angle that captures your pet's personality. 
                Ultimately, the best reference is a photo you truly love and 
                want to see turned into a portrait.
            </p><br />
            <div className="photo__example">
                <div className="example__column">
                    <img src="/example_images/do3.jpg" alt="Good example" />
                    <p className="label__overlay">Can be used as a reference picture</p>
                </div>
                <div className="example__column">
                    <img src="/example_images/dont3.jpg" alt="Bad example" />
                    <p className="label__overlay">While an interesting shot in itself, 
                        it would not be the best as a portrait
                    </p>
                </div>
            </div>
            <br />
            <p>
                Don’t hesitate to send multiple photos — I’m happy to help you 
                choose the most suitable one.
            </p><br />
            <p>
                If your pet has passed away, I’ll do my best to work with what 
                you have. You are welcome to send several images so I can assess 
                which ones will work best.
            </p><br />
            <h3>Prices</h3><br />
            <p>
                A £100 deposit is required to reserve your commission. Please 
                add £60 for each additional subject. However, keep in mind that 
                for smaller sizes, fitting multiple pets may not always be possible.
            </p><br />
            <p>
                Prices listed below include the deposit but do not include postage.
            </p><br />
            <table style={{ marginTop: '1.5rem', width: '100%', maxWidth: '500px', borderCollapse: 'collapse' }}>
                <thead>
                <tr>
                    <th>Size</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>18 × 24 cm</td>
                    <td>£200</td>
                </tr>
                <tr>
                    <td>24 × 30 cm</td>
                    <td>£330</td>
                </tr>
                <tr>
                    <td>30 × 40 cm</td>
                    <td>£550</td>
                </tr>
                </tbody>
            </table><br /><br />
            
            <h3>Preserving Your Portrait</h3><br />
            <p>
                To protect and preserve the pastel artwork, the portrait should be properly mounted and framed under glass. 
                Pastels remain vulnerable to smudging if left exposed, so professional framing is essential.
            </p><br />
            <p>
                I recommend using a framer experienced with pastel artworks. A double mount is ideal to prevent the glass from 
                touching the surface. Avoid hanging the portrait in direct sunlight or humid areas to ensure its longevity.
            </p><br />
        </div>
    )
}

export default Commission
