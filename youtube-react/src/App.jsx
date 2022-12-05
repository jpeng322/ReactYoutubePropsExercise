import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'



function YoutubeComponent(props) {
  return (
    <div className="container">
      <img src={props.thumbnailImg} />
      <div className="content">
        <p>{props.videoTitle}</p>
        <p>{props.uploader}</p>
        <p>{props.videoUploaded}</p>
        <p>{props.views}</p>
      </div>
    </div>
  )
}

function ConditionalComponent(props) {
  return (
    <div>
      {props.showComponent1 ?
        <div>Component 1</div>
        :
        <div>Component 2</div>
      }
    </div>
  )
}

function App() {
  let sampleData = [
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      videoTitle: "He did WHAT?!?! (My intial reaction)",
      videoUploader: "MaxTongster",
      dateVideoUploaded: "10-31-2022",
      videoViews: 10
    },
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      videoTitle: "I bought my best friend a Tesla (EMOTIONAL)",
      videoUploader: "Dave Doughbrick",
      dateVideoUploaded: "11-02-2022",
      videoViews: 300000
    },
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      videoTitle: "React in 100 seconds",
      videoUploader: "Fireship",
      dateVideoUploaded: "2022-09-08",
      videoViews: 255
    }
  ];

  return (
    <div className="app-container">
      {sampleData.map(video => <YoutubeComponent thumbnailImg={video.thumbnailImg} videoTitle={video.videoTitle} uploader={video.videoUploader} videoUploaded={video.dateVideoUploaded} views={video.videoViews} />)}
      {/* <ConditionalComponent showComponent1={true} /> */}
    </div>
  )
}

export default App
