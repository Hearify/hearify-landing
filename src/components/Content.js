import React from "react"
import Article from "./Article.js"
import ViewButtonSort from "./ViewButtonSort"
import { Helmet } from "react-helmet"
import "../components/Blog.css"

function Content({ handleShow }) {
  const blogs = [
    {
      title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      content: "dfgdfgdfdfgdg",
    },
    {
      title: "dfgdfgdfgdfgdfgdfg",
      content: "dfgdfgdfdfgdg",
    },
    {
      title: "sdfsdfsdfdgfhfghfgjh.",
      content: "dfgdfgdfdfgdg",
    },
  ]
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
        <div className="blog-box-container">
          <Article
            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              cumque aliquam, magnam quisquam perspiciatis animi autem!"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              cumque aliquam, magnam quisquam perspiciatis animi autem! Nobis
              ducimus nostrum neque magnam porro voluptatum deleniti, iusto
              dolorem repellendus itaque, ullam."
          />
          <Article
            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              cumque aliquam, magnam quisquam perspiciatis animi autem!"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              cumque aliquam, magnam quisquam perspiciatis animi autem! Nobis
              ducimus nostrum neque magnam porro voluptatum deleniti, iusto
              dolorem repellendus itaque, ullam rem."
          />
          <Article
            title="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              cumque aliquam, magnam quisquam perspiciatis animi autem!"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
              cumque aliquam, magnam quisquam perspiciatis animi autem! Nobis
              ducimus nostrum neque magnam porro voluptatum deleniti, iusto
              dolorem repellendus itaque, ullam rem."
          />
        </div>
      </div>
    </div>
  )
}

export default Content
