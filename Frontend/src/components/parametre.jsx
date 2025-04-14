import React, { useState } from 'react';
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function ParametreCompte() {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g. call an API)
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">

      <Card>
        <CardContent className="p-6 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder="Prénom"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                name="lastName"
                placeholder="Nom"
                value={formData.lastName}
                onChange={handleChange}
              />
              <Input
                name="phone"
                placeholder="Numéro de téléphone"
                value={formData.phone}
                onChange={handleChange}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <Input
              name="address"
              placeholder="Adresse"
              value={formData.address}
              onChange={handleChange}
            />

            <div className="border-t pt-4 mt-4 space-y-4">
              <h2 className="text-lg font-semibold">Mettre à jour le mot de passe</h2>
              <Input
                name="password"
                type="password"
                placeholder="Nouveau mot de passe"
                value={formData.password}
                onChange={handleChange}
              />
              <Input
                name="confirmPassword"
                type="password"
                placeholder="Confirmer le mot de passe"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full mt-4">
              Enregistrer les modifications
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
