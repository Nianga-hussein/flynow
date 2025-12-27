const mokoCategories = [
    {
        id: 1,
        name: "Maison & Quotidien",
        icon: "fa-home",
        subcategories: [
            "Ménage & nettoyage",
            "Dépannage domicile",
            "Réparations & maintenance",
            "Bricolage",
            "Jardinage & extérieur",
            "Déménagement & débarras",
            "Organisation & rangement"
        ]
    },
    {
        id: 2,
        name: "Famille & Assistance",
        icon: "fa-users",
        subcategories: [
            "Babysitting",
            "Garde d’enfants",
            "Aide aux personnes âgées",
            "Aide à domicile",
            "Accompagnement quotidien",
            "Assistance familiale"
        ]
    },
    {
        id: 3,
        name: "Voyage & Mobilité",
        icon: "fa-plane",
        subcategories: [
            "Billetterie",
            "Hébergement",
            "Location courte durée",
            "Visa & immigration",
            "Assurance voyage",
            "Études & mobilité internationale"
        ]
    },
    {
        id: 4,
        name: "Transport & Logistique",
        icon: "fa-truck",
        subcategories: [
            "Transport de personnes",
            "Chauffeur privé",
            "Livraison locale",
            "Livraison internationale",
            "Déménagement",
            "Fret & marchandises",
            "Stockage & entreposage"
        ]
    },
    {
        id: 5,
        name: "Administratif & Démarches",
        icon: "fa-file-signature",
        subcategories: [
            "Démarches administratives",
            "Documents officiels",
            "Traduction de documents",
            "Légalisation & apostille",
            "Assistance consulaire"
        ]
    },
    {
        id: 6,
        name: "Légal & Juridique",
        icon: "fa-balance-scale",
        subcategories: [
            "Création d’entreprise",
            "Domiciliation",
            "Rédaction de contrats",
            "Conseil juridique",
            "Formalités légales"
        ]
    },
    {
        id: 7,
        name: "Business & Entrepreneuriat",
        icon: "fa-briefcase",
        subcategories: [
            "Conseil business",
            "Audit & diagnostic",
            "Business plan",
            "Accompagnement startup",
            "Structuration d’entreprise"
        ]
    },
    {
        id: 8,
        name: "Digital & Technologie",
        icon: "fa-laptop-code",
        subcategories: [
            "Création de sites web",
            "Développement d’applications",
            "E-commerce",
            "Automatisation",
            "Solutions SaaS",
            "Support technique"
        ]
    },
    {
        id: 9,
        name: "Design & Création",
        icon: "fa-paint-brush",
        subcategories: [
            "Logo & identité visuelle",
            "Branding",
            "UX/UI design",
            "Graphisme",
            "Design print & digital"
        ]
    },
    {
        id: 10,
        name: "Marketing & Communication",
        icon: "fa-bullhorn",
        subcategories: [
            "Marketing digital",
            "Réseaux sociaux",
            "Publicité en ligne",
            "SEO & visibilité",
            "Stratégie de marque",
            "Création de contenu"
        ]
    },
    {
        id: 11,
        name: "Finance & Paiements",
        icon: "fa-money-bill-wave",
        subcategories: [
            "Transfert d’argent",
            "Réception de paiements"
        ]
    },
    {
        id: 12,
        name: "Comptabilité & Gestion",
        icon: "fa-calculator",
        subcategories: [
            "Comptabilité",
            "Gestion financière",
            "Fiscalité",
            "Paie & RH",
            "Reporting & contrôle"
        ]
    },
    {
        id: 13,
        name: "Sourcing & Recherche",
        icon: "fa-search",
        subcategories: [
            "Sourcing produits",
            "Recherche fournisseurs",
            "Recherche prestataires",
            "Études de marché",
            "Analyse concurrence",
            "Recherche sur mesure"
        ]
    },
    {
        id: 14,
        name: "Formation & Éducation",
        icon: "fa-graduation-cap",
        subcategories: [
            "Formations professionnelles",
            "Formations digitales",
            "Coaching & mentorat",
            "Certifications",
            "Orientation & études"
        ]
    },
    {
        id: 15,
        name: "Emploi & Opportunités",
        icon: "fa-briefcase",
        subcategories: [
            "Recherche d’emploi",
            "Coaching emploi",
            "CV & lettres",
            "Recrutement",
            "Opportunités business"
        ]
    },
    {
        id: 16,
        name: "Immobilier",
        icon: "fa-building",
        subcategories: [
            "Recherche de biens",
            "Location",
            "Achat & vente",
            "Gestion locative",
            "Dossiers immobiliers"
        ]
    },
    {
        id: 17,
        name: "Événementiel & Loisirs",
        icon: "fa-calendar-alt",
        subcategories: [
            "Organisation d’événements",
            "Événements privés",
            "Événements professionnels",
            "Location de matériel",
            "Animation & logistique"
        ]
    },
    {
        id: 18,
        name: "Commerce & Produits",
        icon: "fa-shopping-cart",
        subcategories: [
            "Achat & revente",
            "E-commerce",
            "Dropshipping",
            "Distribution",
            "Produits locaux & artisanaux"
        ]
    },
    {
        id: 19,
        name: "Santé & Bien-être",
        icon: "fa-heartbeat",
        subcategories: [
            "Coaching santé",
            "Fitness & nutrition",
            "Soins à domicile",
            "Bien-être mental"
        ]
    },
    {
        id: 20,
        name: "Accompagnement & Service personnalisé",
        icon: "fa-handshake",
        subcategories: [
            "Demandes sur mesure",
            "Gestion complète de projets",
            "Assistance personnelle",
            "Assistance professionnelle",
            "Services premium"
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = mokoCategories;
}
