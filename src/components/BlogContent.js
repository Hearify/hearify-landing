import React from "react"
import userFoto from "../images/UserFoto.png"
import postFoto from "../images/image.png"
import "../components/style.css"

function BlogContent() {
  return (
    <div className="postContainer">
      <div className="postName">
        Worem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="postUserInfo">
        <div className="postUserFoto">
          <img className="UserFoto" src={userFoto} />
        </div>
        <div className="postUserTextInfo">
          <div className="postUserName">Anna Fox</div>
          <div className="postUserDescription">
            English teacher Posted Today, 18:30
          </div>
        </div>
      </div>
      <div className="postShortDescription">
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </div>
      <div className="postFotoDescription">
        <img className="postFirstFoto" src={postFoto} />
        <div className="postFirstFotoDescription">
          Photo by author Henry Cooper. You can see more his works here
        </div>
      </div>
      <div className="postSmallName">
        {" "}
        Worem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="postSecondDescription">
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      </div>
      <div className="postFotoDescription">
        <div>
          <img className="postFirstFoto" src={postFoto} />
        </div>
        <div className="postFirstFotoDescription">
          Photo by author Henry Cooper. You can see more his works here
        </div>
      </div>
      <div className="postThirdDescription">
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos{" "}
      </div>
      <div className="postAuthorQuote">
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </div>
      <div className="postAuthorInfo">
        <div className="postAuthorName">-Katya Hwiljowa, </div> Marketing
        specialist
      </div>
      <div className="postLastDescription">
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos.Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      </div>
    </div>
  )
}

export default BlogContent
