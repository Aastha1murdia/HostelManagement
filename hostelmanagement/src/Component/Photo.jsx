import React from 'react'
import {Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
function Photo(props) {
    return (
        <>
            <Item
                    original={props.largepic}
                    thumbnail={props.smallpic}
                    width="1024"
                    height="768"
                >
                {({ ref, open }) => (
                    <img ref={ref} onClick={open} src={props.smallpic} />
                )}
            </Item>
        </>
    )
}

export default Photo
