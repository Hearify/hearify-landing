import React from 'react'
import Blog from './Blog.js'
import ViewButtonSort from "./ViewButtonSort"
import { Helmet } from 'react-helmet'
import '../components/Blog.css'

function Content({ handleShow }) {
    return (
        <div>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
            <div className="content">
                <div className="blog-name">
                    <p>Our blog</p>
                </div>
                <div>
                    <ViewButtonSort handleShow={handleShow} />
                </div>
                <div className="blog-box-container">
                    <Blog />
                    <Blog />
                    <Blog />
                </div>
            </div>
        </div>
    )
}

export default Content
