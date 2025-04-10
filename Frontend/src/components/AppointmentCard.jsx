import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
export default function AppointmentCard({ title, date, time, location, status }) {
    return (
      <Card className="bg-gray">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-muted-foreground">
                {date} • {time}
              </p>
              <p className="text-muted-foreground">{location}</p>
            </div>
            <div className="flex items-center gap-4">
              {status === "upcoming" ? (
                <Badge className="bg-primary">À venir</Badge>
              ) : (
                <Badge variant="outline">Terminé</Badge>
              )}
              <div className="flex gap-2">
                {status === "upcoming" && (
                  <Button variant="outline" size="sm">
                    Modifier
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  Détails
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
  