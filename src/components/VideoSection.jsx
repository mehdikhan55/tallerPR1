import React, { useState } from 'react'
import thumbnail from "../assets/images/thumbnail.png"
import { Play } from 'lucide-react'

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className=" mx-auto px-4 py-6">
      <div className="relative w-full rounded-2xl overflow-hidden">
        {isPlaying ? (
          <iframe
            width="100%"
            height="540"
            src="https://www.youtube.com/embed/KlbIcAYhY4o?autoplay=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[500px] object-cover"
          />
        ) : (
          <div className="relative cursor-pointer" onClick={() => setIsPlaying(true)}>
            <img 
              src={thumbnail} 
              alt="Video thumbnail" 
              className="w-full h-[540px] object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="bg-primary p-4 rounded-full transform transition-transform hover:scale-110 ring-8 ring-primary ring-opacity-20">
                <Play className="w-8 h-8 text-white " fill="white"/>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default VideoSection