import React, { useState } from 'react'
import Artisansarangivideo from '../../../assets/Artisan/sarangi.mp4';
import VideoThumbnail from '../../../assets/Artisan/videothumbnail.png';
import Playbutton from '../../../assets/Artisan/playbutton.svg';

const Videoplayer = () => {
    const [showVideo,setshowVideo]=useState(false);
  return (
     <div className="w-full max-w-md mx-auto mt-10">
      {!showVideo ? (
       <div className='relative flex justify-center '>

        <img
          src={VideoThumbnail}
          alt="Click to play video"
          className="cursor-pointer w-full rounded-lg shadow-md"
          onClick={() => setshowVideo(true)}
        />
        <div className='absolute bottom-24  '>
            <img src={Playbutton} alt='' className='w-20'/>
        </div>
        </div>
      ) : (
        <video
          controls
          autoPlay
          className="w-full rounded-lg shadow-lg"
        >
          <source src={Artisansarangivideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}

export default Videoplayer