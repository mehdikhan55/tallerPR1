import React from 'react'
import {cnc, Printing3d, foundry, injection, laser, metal, plastic, pvc, wood, resin} from "./index"
import RawMaterialCard from './RawMaterialCard'

const materials = [
  { icon: metal, title: 'Metal' },
  { icon: wood, title: 'Madera' },
  { icon: pvc, title: 'PVC' },
  { icon: resin, title: 'Resina' },
  { icon: plastic, title: 'Plásticos Técnicos' },
  { icon: cnc, title: 'CNC' },
  { icon: laser, title: 'Corte Láser' },
  { icon: Printing3d, title: 'Impresión 3D' },
  { icon: foundry, title: 'Fundición' },
  { icon: injection, title: 'Inyección' }
]

const RawMaterial = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="main-heading">Materias Primas</h2>
        <p className="sub-heading">
          Desde el diseño hasta la producción de productos 
          <br />o piezas en diferentes materiales.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {materials.map((material, index) => (
          <RawMaterialCard 
            key={index}
            icon={material.icon} 
            title={material.title}
          />
        ))}
      </div>
    </div>
  )
}

export default RawMaterial
