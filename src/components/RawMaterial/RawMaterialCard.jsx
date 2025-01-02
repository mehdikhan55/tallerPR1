import React from 'react'

const RawMaterialCard = ({ icon, title }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center gap-4">
      <img src={icon} alt={title} className="w-16 h-16" />
      <span className="text-secondary font-medium">{title}</span>
    </div>
  )
}
export default RawMaterialCard