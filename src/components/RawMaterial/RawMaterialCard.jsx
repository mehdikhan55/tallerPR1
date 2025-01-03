import React from 'react'

const RawMaterialCard = ({ index,icon, title }) => {
  return (
    <div className={`p-[1px] max-sm:mx-auto rounded-2xl shadow-[0px_0px_50px_#e0e0e0] transition-shadow duration-300 hover:shadow-md w-48 h-48
      ${index % 2 === 0
        ? 'bg-gradient-to-t from-primary via-primary/30 to-transparent'
        : 'bg-gradient-to-b from-primary via-primary/30 to-transparent'
      }
    `}>
      <div className="bg-white rounded-2xl p-6 px-4 h-full flex flex-col items-center justify-center gap-4">
        <img src={icon} alt={title} className="w-24 h-[80px]" />
        <span className="text-primary font-medium bg-transparent border text-sm border-primary px-4 py-1 rounded-full hover:bg-primary hover:text-white cursor-pointer">{title}</span>
      </div>
    </div>
  )
}
export default RawMaterialCard