import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card'
export default function PhotoCollection({ title, date, imageCount, thumbnail }) {
    return (
      <Link to="album1" className="group">
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="relative aspect-[4/3]">
            <img
              src={thumbnail || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-medium">{title}</h3>
              <p className="text-white/80 text-sm">
                {date} • {imageCount} photos
              </p>
            </div>
          </div>
        </Card>
      </Link>
    )
  }