import React from 'react'
import home from  './../components/Assets/home.svg'
import chat from './../components/Assets/chat.svg'
import post from './../components/Assets/post.svg'
import search from './../components/Assets/search.svg'
import bell from './../components/Assets/bell.svg'

const Home = () => {
  return (
    <div className="homeContainer">
        <div className="homeBody">
            <div className="homeStory">
                <div className="story"></div>
                <div className="story"></div>
                <div className="story"></div>
                <div className="story"></div>
                <div className="story"></div>
                <div className="story"></div>
                <div className="story"></div>
                <div className="story"></div>
                <div className="story"></div>
                <div className="story"></div>
                <div className="story"></div>
                <div className="story"></div>
                </div>
                <div className="homeFeed">
                    <div className="postSection"></div>
                    <div className="onlineSection"></div>
                </div>

        </div>
        <div className="homeFooter">
        <div className="footerImage">
       <img src={home} alt="" />
       <p>home</p>
       </div>
       <div className="footerImage">
         <img src={chat} alt="" />
         <p>chats</p>
       </div>
       <div className="footerImage">
         <img src={post} alt="" />
         <p>post</p>
       </div>
       <div className="footerImage">
         <img src={search} alt="" />
         <p>search</p>
       </div>
       <div className="footerImage">
         <img src={bell} alt="" />
         <p>notifications</p>
       </div>

        </div>
    </div>
  )
}

export default Home