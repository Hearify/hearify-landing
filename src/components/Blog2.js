import React from 'react'
import flower from '../images/flower.png'
import '../components/Blog2.css'

function Blog2() {
    return (
        <div>
            <div class="blog-box2">
                <div class="blog-box-img2">
                    <img className='img2' src={flower} alt="blog-image" />
                    <a href="#" class="blog-img-link2">
                    </a>
                </div>
                <div class="blog-box-text-info2">
                    <div class="blog-box-text-top2">
                        <div class="blog-box-text-topic2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </div>
                        <div class="blog-box-text-description2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos cumque aliquam, magnam
                            quisquam perspiciatis animi autem! Nobis ducimus nostrum neque magnam porro voluptatum
                            deleniti, iusto dolorem repellendus itaque, ullam rem.
                        </div>
                    </div>
                    <div class="blog-box-text-under2">
                        <div class="blog-box-text-dateAt2">
                            Today, 18:30
                        </div>
                        <button class="blog-box-button2">
                            <p>READ MORE</p>
                            <svg id="chevron_right2" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog2
