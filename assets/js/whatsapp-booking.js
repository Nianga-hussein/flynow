document.addEventListener('DOMContentLoaded', function() {
    // Utilisation de la délégation d'événements pour être sûr de capturer le clic
    document.body.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('whatsapp-submit-btn')) {
            e.preventDefault();
            handleSubmission(e.target);
        }
    });

    function handleSubmission(btn) {
        // Validation simple : vérifier si des champs requis sont vides dans l'étape active
        // Le script wizard.js gère l'affichage des erreurs, nous vérifions juste l'état
        let isValid = true;
        const currentStep = btn.closest('.wizard-fieldset');
        if (currentStep) {
            const requiredInputs = currentStep.querySelectorAll('.wizard-required');
            requiredInputs.forEach(function(input) {
                if (!input.value.trim()) {
                    isValid = false;
                    // Forcer l'affichage de l'erreur (au cas où wizard.js ne l'a pas encore fait)
                    // Note: wizard.js le fait aussi, mais on s'assure
                    const errorDiv = input.parentElement.querySelector('.wizard-form-error');
                    if(errorDiv) errorDiv.style.display = 'block';
                }
            });
        }

        if (isValid) {
            sendToWhatsapp();
        } else {
            // Optionnel : faire défiler vers la première erreur
            const firstError = currentStep.querySelector('.wizard-required:invalid, .wizard-required[value=""]');
            if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    function getSelectedText(elementId) {
        const elt = document.getElementById(elementId);
        if (elt && elt.selectedIndex !== -1) {
            return elt.options[elt.selectedIndex].text;
        }
        return 'Non spécifié';
    }

    function getValue(elementId) {
        const elt = document.getElementById(elementId);
        return elt ? elt.value : 'Non spécifié';
    }

    function sendToWhatsapp() {
        // Récupération des données
        const gender = getSelectedText('gender');
        const firstName = getValue('first-name');
        const lastName = getValue('last-name');
        const email = getValue('email');
        const city = getSelectedText('nationality');
        const phone = getValue('phone');
        const date = getValue('flightDep');
        const address = getValue('post_code');
        const description = getValue('f_number');
        const urgency = getSelectedText('format');
        const inspection = getSelectedText('format-2');
        
        // Paiement
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
        
        // Création de l'URL
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        // Ouverture dans un nouvel onglet
        window.open(url, '_blank');
    }
});
