document.addEventListener('DOMContentLoaded', function() {
    
    // Fonction principale de gestion du clic
    function handleWhatsappClick(e) {
        // Vérification de la classe du bouton
        if (e.target && (e.target.classList.contains('whatsapp-submit-btn') || e.target.closest('.whatsapp-submit-btn'))) {
            e.preventDefault();
            e.stopPropagation(); // Arrêter la propagation pour éviter les conflits avec d'autres scripts
            sendToWhatsapp();
        }
    }

    // Attacher l'écouteur d'événements au document pour la délégation (plus robuste)
    document.addEventListener('click', handleWhatsappClick, true); // Use capture phase to ensure we catch it first

    function getSelectedText(elementId) {
        const elt = document.getElementById(elementId);
        if (elt && elt.selectedIndex !== -1) {
            return elt.options[elt.selectedIndex].text;
        }
        return 'Non spécifié';
    }

    function getValue(elementId) {
        const elt = document.getElementById(elementId);
        return elt ? elt.value.trim() : 'Non spécifié';
    }

    function sendToWhatsapp() {
        // Récupération des données du formulaire (Step 2 principalement)
        const gender = getSelectedText('gender');
        const firstName = getValue('first-name');
        const lastName = getValue('last-name');
        const email = getValue('email');
        const city = getSelectedText('nationality'); // Utilisé pour Ville/Quartier dans le HTML modifié
        const phone = getValue('phone');
        const date = getValue('flightDep');
        const address = getValue('post_code');
        const description = getValue('f_number');
        const urgency = getSelectedText('format');
        const inspection = getSelectedText('format-2');
        
        // Paiement (Step 3)
        let payment = "Non spécifié";
        const laterRadio = document.getElementById('later');
        const nowRadio = document.getElementById('now');
        if (laterRadio && laterRadio.checked) payment = "Payer plus tard";
        if (nowRadio && nowRadio.checked) payment = "Payer maintenant";

        // Construction du message WhatsApp
        let message = `*🚀 NOUVELLE DEMANDE DE SERVICE - MOKO*\n\n`;
        
        message += `*👤 INFORMATIONS CLIENT*\n`;
        message += `--------------------------------\n`;
        message += `*Nom complet:* ${firstName} ${lastName}\n`;
        message += `*Genre:* ${gender}\n`;
        message += `*Téléphone:* ${phone}\n`;
        message += `*Email:* ${email}\n\n`;
        
        message += `*📍 DÉTAILS DU SERVICE*\n`;
        message += `--------------------------------\n`;
        message += `*Ville/Zone:* ${city}\n`;
        message += `*Adresse:* ${address}\n`;
        message += `*Date souhaitée:* ${date}\n`;
        message += `*Description:* ${description}\n`;
        message += `*Urgence:* ${urgency}\n`;
        message += `*Inspection:* ${inspection}\n\n`;
        
        message += `*💳 PAIEMENT*\n`;
        message += `--------------------------------\n`;
        message += `*Préférence:* ${payment}\n`;

        // Numéro WhatsApp (sans le +)
        const whatsappNumber = "36203630726";
        
        // Encodage du message
        const encodedMessage = encodeURIComponent(message);
        
        // Utilisation de l'URL universelle WhatsApp
        // Sur mobile, cela ouvrira l'app. Sur desktop, cela ouvrira WhatsApp Web ou l'app desktop.
        const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        // Redirection directe (meilleur pour mobile que window.open)
        window.location.href = url;
    }
});
