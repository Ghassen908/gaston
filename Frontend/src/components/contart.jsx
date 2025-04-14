import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"

export default function ContractPage() {
  return (
    <div className="container mx-auto py-10">


      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Contrat #12345</CardTitle>
          <CardDescription>Créé le 14 Avril 2025</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Parties concernées</h3>
            <p>Entre la société XYZ, représentée par M. Dupont, ci-après dénommée "le Prestataire"</p>
            <p>Et la société ABC, représentée par Mme Martin, ci-après dénommée "le Client"</p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Objet du contrat</h3>
            <p>Le présent contrat a pour objet la fourniture des services suivants :</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Développement d'une application web</li>
              <li>Maintenance technique pendant 12 mois</li>
              <li>Formation des utilisateurs</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Conditions financières</h3>
            <p>Le montant total des prestations s'élève à 15 000€ HT, payable selon l'échéancier suivant :</p>
            <ul className="list-disc pl-5 mt-2">
              <li>30% à la signature du contrat</li>
              <li>40% à la livraison de la version beta</li>
              <li>30% à la livraison finale</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Durée du contrat</h3>
            <p>Le présent contrat est conclu pour une durée de 12 mois à compter de sa date de signature.</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">Ce document est un aperçu du contrat complet.</p>
          <Button variant="default">
            <Download className="mr-2 h-4 w-4" />
            Télécharger le PDF
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
