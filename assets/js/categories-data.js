const categoriesData = [
    {
        id: "maison-quotidien",
        title: "Maison & Quotidien",
        image: "assets/media/Categories/1️⃣ Maison & Quotidien.jpeg",
        folder: "1️⃣ Maison & Quotidien",
        subcategories: [
            { title: "Ménage & nettoyage", image: "Ménage et nettoyage.jpeg" },
            { title: "Dépannage domicile", image: "Dépannage domicile.jpeg" },
            { title: "Réparations & maintenance", image: "Réparation et maintenance.jpeg" },
            { title: "Bricolage", image: "Bricolage.jpeg" },
            { title: "Jardinage & extérieur", image: "Jardinage & extérieur.jpeg" },
            { title: "Déménagement & débarras", image: "Déménagement & débarras.jpeg" },
            { title: "Organisation & rangement", image: "Organisation & rangement.jpeg" }
        ]
    },
    {
        id: "famille-assistance",
        title: "Famille & Assistance",
        image: "assets/media/Categories/2️⃣ Famille & Assistance.jpeg",
        folder: "2️⃣ Famille & Assistance",
        subcategories: [
            { title: "Babysitting", image: "Babysitting.jpeg" },
            { title: "Garde d’enfants", image: "Babysitting.jpeg" }, // Using Babysitting as placeholder if specific image missing
            { title: "Aide aux personnes âgées", image: "Aide aux personnes âgées.jpeg" },
            { title: "Aide à domicile", image: "Aide à domicile.jpeg" },
            { title: "Accompagnement quotidien", image: "Accompagnement quotidien.jpeg" },
            { title: "Assistance familiale", image: "Assistance familiale.jpeg" }
        ]
    },
    {
        id: "voyage-mobilite",
        title: "Voyage & Mobilité",
        image: "assets/media/Categories/3️⃣ Voyage & Mobilité.jpeg",
        folder: "3️⃣ Voyage & Mobilité",
        subcategories: [
            { title: "Billetterie", image: "Billetterie.jpeg" },
            { title: "Hébergement", image: "Hébergement.jpeg" },
            { title: "Location courte durée", image: "Location courte durée.jpeg" },
            { title: "Visa & immigration", image: "Visa & immigration.jpeg" },
            { title: "Assurance voyage", image: "Assurance voyage.jpeg" },
            { title: "Études & mobilité internationale", image: "Études & mobilité internationale.jpeg" }
        ]
    },
    {
        id: "transport-logistique",
        title: "Transport & Logistique",
        image: "assets/media/Categories/4️⃣ Transport & Logistique.jpeg",
        folder: "4️⃣ Transport & Logistique",
        subcategories: [
            { title: "Transport de personnes", image: "Transport de personnes.jpeg" },
            { title: "Chauffeur privé", image: "Chauffeur privé.jpeg" },
            { title: "Livraison locale", image: "Livraison locale.jpeg" },
            { title: "Livraison internationale", image: "Livraison internationale.jpeg" },
            { title: "Déménagement", image: "Déménagement.jpeg" },
            { title: "Fret & marchandises", image: "Fret & marchandises.jpeg" },
            { title: "Stockage & entreposage", image: "Stockage & entreposage.jpeg" }
        ]
    },
    {
        id: "administratif-demarches",
        title: "Administratif & Démarches",
        image: "assets/media/Categories/5️⃣ Administratif & Démarches.jpeg",
        folder: "5️⃣ Administratif & Démarches",
        subcategories: [
            { title: "Démarches administratives", image: "Démarches administratives.jpeg" },
            { title: "Documents officiels", image: "Documents officiels.jpeg" },
            { title: "Traduction de documents", image: "Traduction de documents.jpeg" },
            { title: "Légalisation & apostille", image: "Légalisation & apostille.jpeg" },
            { title: "Assistance consulaire", image: "Assistance consulaire.jpeg" }
        ]
    },
    {
        id: "legal-juridique",
        title: "Légal & Juridique",
        image: "assets/media/Categories/6️⃣ Légal & Juridique.jpeg",
        folder: "6️⃣ Légal & Juridique",
        subcategories: [
            { title: "Création d’entreprise", image: "Création d’entreprise.jpeg" },
            { title: "Domiciliation", image: "Domiciliation.jpeg" },
            { title: "Rédaction de contrats", image: "Rédaction de contrats.jpeg" },
            { title: "Conseil juridique", image: "Conseil juridique.jpeg" },
            { title: "Formalités légales", image: "Conseil juridique.jpeg" } // Reuse
        ]
    },
    {
        id: "business-entrepreneuriat",
        title: "Business & Entrepreneuriat",
        image: "assets/media/Categories/7️⃣ Business & Entrepreneuriat.jpeg",
        folder: "7️⃣ Business & Entrepreneuriat",
        subcategories: [
            { title: "Conseil business", image: "Conseil business.jpeg" },
            { title: "Audit & diagnostic", image: "Audit & diagnostic.jpeg" },
            { title: "Business plan", image: "Business plan.jpeg" },
            { title: "Accompagnement startup", image: "Accompagnement startup.jpeg" },
            { title: "Structuration d’entreprise", image: "Structuration d’entreprise.jpeg" }
        ]
    },
    {
        id: "digital-technologie",
        title: "Digital & Technologie",
        image: "assets/media/Categories/8️⃣ Digital & Technologie.jpeg",
        folder: "8️⃣ Digital & Technologie",
        subcategories: [
            { title: "Création de sites web", image: "Création de sites web.jpeg" },
            { title: "Développement d’applications", image: "Développement d’applications.jpeg" },
            { title: "E-commerce", image: "E-commerce.jpeg" },
            { title: "Automatisation", image: "Automatisation.jpeg" },
            { title: "Solutions SaaS", image: "Solutions SaaS.jpeg" },
            { title: "Support technique", image: "Support technique.jpeg" }
        ]
    },
    {
        id: "design-creation",
        title: "Design & Création",
        image: "assets/media/Categories/9️⃣ Design & Création.jpeg",
        folder: "9️⃣ Design & Création",
        subcategories: [
            { title: "Logo & identité visuelle", image: "Logo & identité visuelle.jpeg" },
            { title: "Branding", image: "Branding.jpeg" },
            { title: "UX/UI design", image: "UX UI design.jpeg" },
            { title: "Graphisme", image: "Graphisme.jpeg" },
            { title: "Design print & digital", image: "Design print & digital.jpeg" }
        ]
    },
    {
        id: "marketing-communication",
        title: "Marketing & Communication",
        image: "assets/media/Categories/🔟 Marketing & Communication.jpeg",
        folder: "🔟 Marketing & Communication",
        subcategories: [
            { title: "Marketing digital", image: "Marketing digital.jpeg" },
            { title: "Réseaux sociaux", image: "Réseaux sociaux.jpeg" },
            { title: "Publicité en ligne", image: "Publicité en ligne.jpeg" },
            { title: "SEO & visibilité", image: "SEO & visibilité.jpeg" },
            { title: "Stratégie de marque", image: "Stratégie de marque.jpeg" },
            { title: "Création de contenu", image: "Création de contenu.jpeg" }
        ]
    },
    {
        id: "finance-paiements",
        title: "Finance & Paiements",
        image: "assets/media/Categories/1️⃣1️⃣ Finance & Paiements.jpeg",
        folder: "1️⃣1️⃣ Finance & Paiements",
        subcategories: [
            { title: "Transfert d’argent", image: "Transfert d’argent.jpeg" },
            { title: "Réception de paiements", image: "Réception de paiements.jpeg" }
        ]
    },
    {
        id: "comptabilite-gestion",
        title: "Comptabilité & Gestion",
        image: "assets/media/Categories/1️⃣2️⃣ Comptabilité & Gestion.jpeg",
        folder: "1️⃣2️⃣ Comptabilité & Gestion",
        subcategories: [
            { title: "Comptabilité", image: "Comptabilité.jpeg" },
            { title: "Gestion financière", image: "Gestion financière.jpeg" },
            { title: "Fiscalité", image: "Fiscalité.jpeg" },
            { title: "Paie & RH", image: "Paie & RH.jpeg" },
            { title: "Reporting & contrôle", image: "Reporting & contrôle.jpeg" }
        ]
    },
    {
        id: "sourcing-recherche",
        title: "Sourcing & Recherche",
        image: "assets/media/Categories/1️⃣3️⃣ Sourcing & Recherche.jpeg",
        folder: "1️⃣3️⃣ Sourcing & Recherche",
        subcategories: [
            { title: "Sourcing produits", image: "Sourcing produits.jpeg" },
            { title: "Recherche fournisseurs", image: "Recherche fournisseurs.jpeg" },
            { title: "Recherche prestataires", image: "Recherche prestataires.jpeg" },
            { title: "Études de marché", image: "Études de marché.jpeg" },
            { title: "Analyse concurrence", image: "Analyse concurrence.jpeg" },
            { title: "Recherche sur mesure", image: "Recherche sur mesure.jpeg" }
        ]
    },
    {
        id: "formation-education",
        title: "Formation & Éducation",
        image: "assets/media/Categories/1️⃣4️⃣ Formation & Éducation.jpeg",
        folder: "1️⃣4️⃣ Formation & Éducation",
        subcategories: [
            { title: "Formations professionnelles", image: "Formations professionnelles.jpeg" },
            { title: "Formations digitales", image: "Formations digitales.jpeg" },
            { title: "Coaching & mentorat", image: "Coaching & mentorat.jpeg" },
            { title: "Certifications", image: "Certifications.jpeg" },
            { title: "Orientation & études", image: "Orientation & études.jpeg" }
        ]
    },
    {
        id: "emploi-opportunites",
        title: "Emploi & Opportunités",
        image: "assets/media/Categories/1️⃣5️⃣ Emploi & Opportunités.jpeg",
        folder: "1️⃣5️⃣ Emploi & Opportunités",
        subcategories: [
            { title: "Recherche d’emploi", image: "Recherche d’emploi.jpeg" },
            { title: "Coaching emploi", image: "Coaching emploi.jpeg" },
            { title: "CV & lettres", image: "CV & lettres.jpeg" },
            { title: "Recrutement", image: "Recrutement.jpeg" },
            { title: "Opportunités business", image: "Opportunités business.jpeg" }
        ]
    },
    {
        id: "immobilier",
        title: "Immobilier",
        image: "assets/media/Categories/1️⃣6️⃣ Immobilier.jpeg",
        folder: "1️⃣6️⃣ Immobilier",
        subcategories: [
            { title: "Recherche de biens", image: "Recherche de biens.jpeg" },
            { title: "Location", image: "Location.jpeg" },
            { title: "Achat & vente", image: "Achat & vente.jpeg" },
            { title: "Gestion locative", image: "Gestion locative.jpeg" },
            { title: "Dossiers immobiliers", image: "Dossiers immobiliers.jpeg" }
        ]
    },
    {
        id: "evenementiel-loisirs",
        title: "Événementiel & Loisirs",
        image: "assets/media/Categories/1️⃣7️⃣ Événementiel & Loisirs.jpeg",
        folder: "1️⃣7️⃣ Événementiel & Loisirs",
        subcategories: [
            { title: "Organisation d’événements", image: "Organisation d’événements.jpeg" },
            { title: "Événements privés", image: "Événements privés.jpeg" },
            { title: "Événements professionnels", image: "Événements professionnels.jpeg" },
            { title: "Location de matériel", image: "Location de matériel.jpeg" },
            { title: "Animation & logistique", image: "Animation & logistique.jpeg" }
        ]
    },
    {
        id: "commerce-produits",
        title: "Commerce & Produits",
        image: "assets/media/Categories/1️⃣8️⃣ Commerce & Produits.jpeg",
        folder: "1️⃣8️⃣ Commerce & Produits",
        subcategories: [
            { title: "Achat & revente", image: "Achat & revente.jpeg" },
            { title: "E-commerce", image: "E-commerce.jpeg" },
            { title: "Dropshipping", image: "Dropshipping.jpeg" },
            { title: "Distribution", image: "Commerce & Produits.jpg" }, // Fallback
            { title: "Produits locaux & artisanaux", image: "Produits locaux & artisanaux.jpg" }
        ]
    },
    {
        id: "sante-bien-etre",
        title: "Santé & Bien-être",
        image: "assets/media/Categories/santé et bien etre .jpeg",
        folder: "1️⃣9️⃣ Santé bien etre",
        subcategories: [
            { title: "Coaching santé", image: "Coaching santé.jpg" },
            { title: "Fitness & nutrition", image: "Fitness & nutrition.jpg" },
            { title: "Soins à domicile", image: "Soins à domicile.jpg" },
            { title: "Bien-être mental", image: "Bien-être mental.jpg" }
        ]
    },
    {
        id: "accompagnement-service-personnalise",
        title: "Accompagnement & Service personnalisé",
        image: "assets/media/Categories/2️⃣0️⃣ Accompagnement & Service personnalisé.jpeg",
        folder: "2️⃣0️⃣ Accompagnement & Service personnalisé",
        subcategories: [
            { title: "Demandes sur mesure", image: "Demandes sur mesure.jpg" },
            { title: "Gestion complète de projets", image: "Gestion complète de projets.jpg" },
            { title: "Assistance personnelle", image: "Assistance personnelle.jpg" },
            { title: "Assistance professionnelle", image: "Assistance professionnelle.jpg" },
            { title: "Services premium", image: "Services premium.jpg" }
        ]
    }
];

if (typeof window !== 'undefined') {
    window.categoriesData = categoriesData;
}
