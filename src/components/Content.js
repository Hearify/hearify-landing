import React from 'react'
import "../components/style.css"
import Blog from './Blog'
import ViewButtonSort from "./ViewButtonSort"

function Content() {
    return (
        <div class="content">
            <div class="blog-name">
                <p>Our blog</p>
            </div>
            <div className=''>
                <ViewButtonSort/>
            </div>
            <div class="blog-box-container">
                <Blog />
                <Blog />
                <Blog />



            </div>

        </div>
    )
}

export default Content
