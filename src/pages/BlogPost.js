import React from "react"
import Headery from "../components/Headery"
import Footer from "../components/Footer"
import "../components/style.css"
import BlogContent from "../components/BlogContent"

function BlogPost() {
  return (
    <div>
      <div>
        <Headery />
        <BlogContent/>
        <Footer />
      </div>
    </div>
  )
}

export default BlogPost
