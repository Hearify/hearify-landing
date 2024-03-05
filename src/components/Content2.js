import React from "react"
import ViewButtonSort from "./ViewButtonSort"
import { Helmet } from "react-helmet"
import Article2 from "./Article2.js"
import { useState } from "react"

function Content2({ handleShow }) {
  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className="content">
        <div className="blog-name">
          <p className="blog-name-p">Our blog</p>
        </div>
        <div>
          <ViewButtonSort handleShow={handleShow} />
        </div>
        <div className="blog-box-container2">
          <Article2 />
          <Article2 />
          <Article2 />
          <Article2 />
          <Article2 />
          <Article2 />
        </div>
      </div>
    </div>
  )
}

export default Content2
