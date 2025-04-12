import React from "react"
import "../styles/Pages.css"

// draggable=false
// robots.txt for indexing prohibition

const Commission: React.FC = () => {
    return (
        <div className="text__container">
            <h3>Photo Requirements</h3>
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
                from above distorts proportions, especially around the face. 
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
                Frontal, symmetrical shots tend to look static and less dynamic.
                Instead, choose an angle that captures your pet's personality. 
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
            </p>
            <p>
                If your pet has passed away, I’ll do my best to work with what 
                you have. You are welcome to send several images so I can assess 
                which ones will work best.
            </p><br />
            <h3>Prices</h3>
            <p>
                
                Please add £60 for each additional subject.<br />
                Prices do not include posting.<br />
            </p>

            <table style={{ marginTop: '1.5rem', width: '100%', maxWidth: '500px', borderCollapse: 'collapse' }}>
                <thead>
                <tr>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Max Subjects</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>18 × 24 cm</td>
                    <td>£240</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>24 × 30 cm</td>
                    <td>£320</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>30 × 40 cm</td>
                    <td>£400</td>
                    <td>3</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Commission
