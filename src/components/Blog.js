import React from 'react'
import flower from '../images/flower.png'
import '../components/Blog.css'
import ViewButtonSort from "./ViewButtonSort"

function Blog() {
    return (
            <div class="blog-box">
                <div class="blog-box-img">
                    <img className='img' src={flower} alt="blog-image" />
                    <a href="#" class="blog-img-link">
                    </a>
                </div>
                <div class="blog-box-text-info">
                    <div class="blog-box-text-top">
                        <div class="blog-box-text-topic">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </div>
                        <div class="blog-box-text-description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos cumque aliquam, magnam
                            quisquam perspiciatis animi autem! Nobis ducimus nostrum neque magnam porro voluptatum
                            deleniti, iusto dolorem repellendus itaque, ullam rem.
                        </div>
                    </div>
                    <div class="blog-box-text-under">
                        <div class="blog-box-text-dateAt">
                            Today, 18:30
                        </div>
                        <button class="blog-box-button">
                            <p>READ MORE</p>
                            <svg id="chevron_right" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
    )
}

export default Blog
