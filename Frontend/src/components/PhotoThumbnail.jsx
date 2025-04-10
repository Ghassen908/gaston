import React from 'react'
import { Button } from '@/components/ui/button'
import { Camera, Heart, Download, Share2, Eye } from 'lucide-react'

export default function PhotoThumbnail({ isFavorite = false }) {
    return (
      <div className="group relative aspect-square overflow-hidden rounded-md">
        <img
          src={""}
          alt="Photo"
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30">
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button variant="ghost" size="icon" className="h-8 w-8 bg-black/30 text-white hover:bg-black/50">
              {isFavorite ? <Heart className="h-4 w-4 fill-white" /> : <Heart className="h-4 w-4" />}
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity flex justify-between">
            <Button variant="ghost" size="icon" className="h-8 w-8 bg-black/30 text-white hover:bg-black/50">
              <Eye className="h-4 w-4" />
            </Button>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 bg-black/30 text-white hover:bg-black/50">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 bg-black/30 text-white hover:bg-black/50">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }