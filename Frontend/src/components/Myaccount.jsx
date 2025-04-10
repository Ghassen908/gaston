import React from 'react'
import { Camera, Calendar, Settings, LogOut, Heart} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import PhotoCollection from './PhotoCollection'
// Dark Mode Toggle Component
import DarkModeToggle from './DarkModeToggle'; // Assuming this component is saved in the same folder
import PhotoThumbnail from './PhotoThumbnail'
import AppointmentCard from './AppointmentCard'
export default function MyAccountPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
        <div className="flex items-center gap-4">
          <Avatar className="h-20 w-20 border-2 border-primary">
            <AvatarImage src="/placeholder.svg" alt="Photo de profil" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold">Claire Dupont</h1>
            <p className="text-muted-foreground">Client depuis Janvier 2023</p>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="secondary">Client Premium</Badge>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Add the Dark Mode Toggle button here */}
          <DarkModeToggle />
          <Button variant="outline" className="gap-2">
            <LogOut className="h-4 w-4" />
            Déconnexion
          </Button>
        </div>
      </div>

      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-4 lg:w-[600px]">
          <TabsTrigger value="photos" className="flex items-center gap-2">
            <Camera className="h-4 w-4" />
            <span className="hidden sm:inline">Mes Photos</span>
          </TabsTrigger>
          <TabsTrigger value="appointments" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="hidden sm:inline">Rendez-vous</span>
          </TabsTrigger>
          <TabsTrigger value="favorites" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            <span className="hidden sm:inline">Favoris</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">Paramètres</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="photos" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Mes Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PhotoCollection
              title="Séance Portrait - Mars 2024"
              date="15 Mars 2024"
              imageCount={24}
              thumbnail="/placeholder.svg"
            />
            <PhotoCollection
              title="Mariage Famille Martin"
              date="5 Février 2024"
              imageCount={156}
              thumbnail="/placeholder.svg"
            />
            <PhotoCollection
              title="Photos de Famille"
              date="20 Décembre 2023"
              imageCount={42}
              thumbnail="/placeholder.svg"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Photos Récentes</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <PhotoThumbnail key={i} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline">Voir toutes mes photos</Button>
          </div>
        </TabsContent>

        <TabsContent value="appointments" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Mes Rendez-vous</h2>
          <div className="space-y-4">
            <AppointmentCard
              title="Séance Photo de Famille"
              date="15 Avril 2024"
              time="14:00 - 16:00"
              location="Studio Central, Paris"
              status="upcoming"
            />
            <AppointmentCard
              title="Séance Portrait Professionnel"
              date="5 Mars 2024"
              time="10:00 - 11:30"
              location="Studio Central, Paris"
              status="completed"
            />
            <AppointmentCard
              title="Shooting Extérieur"
              date="20 Janvier 2024"
              time="15:00 - 17:00"
              location="Parc des Buttes-Chaumont, Paris"
              status="completed"
            />
          </div>
          <div className="mt-6">
            <Button>Réserver une nouvelle séance</Button>
          </div>
        </TabsContent>

        <TabsContent value="favorites" className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Mes Photos Favorites</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <PhotoThumbnail key={i} isFavorite={true} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">Paramètres du Compte</h2>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="font-medium">
                      Nom complet
                    </label>
                    <input id="name" type="text" defaultValue="Claire Dupont" className="border rounded-md p-2" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      defaultValue="claire.dupont@example.com"
                      className="border rounded-md p-2"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phone" className="font-medium">
                      Téléphone
                    </label>
                    <input id="phone" type="tel" defaultValue="+33 6 12 34 56 78" className="border rounded-md p-2" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="address" className="font-medium">
                      Adresse
                    </label>
                    <textarea
                      id="address"
                      defaultValue="123 Rue de Paris, 75001 Paris, France"
                      className="border rounded-md p-2 min-h-[80px]"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="notifications" className="font-medium">
                      Préférences de notification
                    </label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input id="email-notif" type="checkbox" defaultChecked />
                        <label htmlFor="email-notif">Recevoir des notifications par email</label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input id="sms-notif" type="checkbox" defaultChecked />
                        <label htmlFor="sms-notif">Recevoir des notifications par SMS</label>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex justify-end">
                    <Button>Enregistrer les modifications</Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Sécurité</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Changer le mot de passe</h3>
                    <Button variant="outline">Modifier le mot de passe</Button>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-medium mb-2">Authentification à deux facteurs</h3>
                    <Button variant="outline">Configurer l'authentification à deux facteurs</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}




