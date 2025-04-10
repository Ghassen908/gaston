import React from 'react'
import { Button } from '@/components/ui/button'
import DarkModeToggle from './DarkModeToggle';
// Importation manuelle des images
import Image1 from './image/image1.jpg'
import Image2 from './image/image2.jpg'
import Image3 from './image/image3.jpg'
import Image4 from './image/image4.jpg'
import Image5 from './image/image5.jpg'
import Image6 from './image/image6.jpg'
import Image7 from './image/image7.jpg'
import Image8 from './image/image8.jpg'
import Image9 from './image/image9.jpg'
import Image10 from './image/image10.jpg'

export default function Album1() {
  const photos = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10]

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Album : Séance Portrait</h1>
        <DarkModeToggle />
        
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {photos.map((src, index) => (
          <div
            key={index}
            className="w-full aspect-square overflow-hidden rounded-md border shadow-sm"
          >
            <img
              src={src}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
            />
          </div>
        ))}
      </div>
      <Button variant="outline">Retour à mes albums</Button>
    </div>
    
  )
}
