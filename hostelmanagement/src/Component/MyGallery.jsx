import React from 'react'
import Photo from './Photo';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import './MyGallery.css';

import { Gallery} from 'react-photoswipe-gallery'
function MyGallery() {
    return (
        <>
        <h6>Netaji Subhash Chandra Boss Boy's Hostel</h6>
        <Gallery>
            <div className="photo">
                <Photo
                    smallpic="./images/img6.png"
                    largepic="./images/img6.png"
                />
                <Photo
                    smallpic="./images/img7.png"
                    largepic="./images/img7.png"
                 />
                <Photo
                    smallpic="./images/img8.png"
                    largepic="./images/img8.png"
                />
                <Photo
                    smallpic="./images/img9.png"
                    largepic="./images/img9.png"
                 />
        </div>
        </Gallery>
        <h6>A.N. Khosla Boy's Hostel</h6>
        <div className="photo">
            <Gallery>
                <Photo
                    smallpic="./images/img14.png"
                    largepic="./images/img14.png"
                />
                <Photo
                    smallpic="./images/img15.png"
                    largepic="./images/img15.png"
                />
                <Photo
                    smallpic="./images/img12.png"
                    largepic="./images/img12.png"
                />
                <Photo
                    smallpic="./images/img13.png"
                    largepic="./images/img13.png"
                />
            </Gallery>
        </div>

        <h6>GSM Boy's Hostel</h6>
        <div className="photo">

            <Gallery>
            <Photo
                    smallpic="./images/img16.png"
                    largepic="./images/img16.png"
                />
                <Photo
                    smallpic="./images/img17.png"
                    largepic="./images/img17.png"
                />
                <Photo
                    smallpic="./images/img18.png"
                    largepic="./images/img18.png"
                />
                <Photo
                    smallpic="./images/img19.png"
                    largepic="./images/img19.png"
                />
            </Gallery>
        </div>
        <h6>PHD Boy's hostel</h6>
        <div className="photo">
            <Gallery>
                <Photo
                        smallpic="./images/img20.png"
                        largepic="./images/img20.png"
                    />
                    <Photo
                        smallpic="./images/img21.png"
                        largepic="./images/img21.png"
                    />
                    <Photo
                        smallpic="./images/img22.png"
                        largepic="./images/img22.png"
                    />
                    <Photo
                        smallpic="./images/img23.png"
                        largepic="./images/img23.png"
                    />
            </Gallery>

        </div>
        <h6>MV Boy's Hostel</h6>
        <div className="photo">
            <Gallery>
            <Photo
                    smallpic="./images/img16.png"
                    largepic="./images/img16.png"
                />
                <Photo
                    smallpic="./images/img17.png"
                    largepic="./images/img17.png"
                />
                <Photo
                    smallpic="./images/img18.png"
                    largepic="./images/img18.png"
                />
                <Photo
                    smallpic="./images/img19.png"
                    largepic="./images/img19.png"
                />
            </Gallery>
        </div>
        <h6> CTAE Girl's hostel</h6>
        <div className="photo">
            <Gallery>
                <Photo
                    smallpic="./images/img25.png"
                    largepic="./images/img25.png"
                />
                <Photo
                    smallpic="./images/img26.jpeg"
                    largepic="./images/img26.jpeg"
                />
                <Photo
                    smallpic="./images/img27.jpeg"
                    largepic="./images/img27.jpeg"
                />
                <Photo
                    smallpic="./images/img24.jpeg"
                    largepic="./images/img24.jpeg"
                />
            </Gallery>
        </div>
        </>
    )
}

export default MyGallery
