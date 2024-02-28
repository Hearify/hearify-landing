import React from "react"
import flower from "../images/flower.png"
import "../components/Blog.css"
import ViewButtonSort from "./ViewButtonSort"

function Article(props) {
  return (
    <article class="blog-box3">
      <div class="blog-box-img3">
        <img className="img3" src={flower} alt="blog-image" />
        <a href="#" class="blog-img-link"></a>
      </div>
      <div class="blog-box-text-info3">
        <div class="blog-box-text-top">
          <div class="blog-box-text-topic3">{props.title}</div>
          <div class="blog-box-text-description3">{props.content}</div>
        </div>
        <div class="blog-box-text-under3">
          <div class="blog-box-text-dateAt3">Today, 18:30</div>
          <button class="blog-box-button3">
            <p>READ MORE</p>
            <svg
              id="chevron_right3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}

export default Article
