(function($) {
    'use strict';

    $(document).ready(function() {
        if (window.categoriesData) {
            renderMobileCategories(window.categoriesData);
            renderMobilePopularServices(window.categoriesData);
        }
    });

    function renderMobileCategories(data) {
        const container = $('#mobile-categories-container');
        if (!container.length) return;

        container.empty();
        
        // Show first 8 categories for grid to keep it clean, or all if needed.
        // Let's show first 8 and then "See All" links to listing.
        const limit = 8;
        
        data.slice(0, limit).forEach(cat => {
            // Shorten title for grid if too long
            let displayTitle = cat.title.split('&')[0].trim(); 
            if(displayTitle.length > 10) displayTitle = displayTitle.substring(0, 10) + '..';

            const html = `
                <a href="flight-listing.html?category=${cat.id}" class="category-item">
                    <div class="category-icon-box">
                        <img src="${cat.image}" alt="${cat.title}">
                    </div>
                    <span class="category-label">${cat.title}</span>
                </a>
            `;
            container.append(html);
        });
    }

    function renderMobilePopularServices(data) {
        const container = $('#mobile-popular-container');
        if (!container.length) return;

        container.empty();

        // Pick a few representative subcategories
        const popularPicks = [
            { catId: 'maison-quotidien', subIndex: 0 }, // Ménage
            { catId: 'transport-logistique', subIndex: 1 }, // Chauffeur
            { catId: 'famille-assistance', subIndex: 0 }, // Babysitting
            { catId: 'sante-bien-etre', subIndex: 0 } // Coaching
        ];

        let count = 0;
        
        // Iterate through data to find matches or just pick first ones
        data.forEach(cat => {
            if (count >= 5) return; // Limit to 5
            
            // Logic: Pick the first subcategory of the first 5 categories
            if (cat.subcategories && cat.subcategories.length > 0) {
                const sub = cat.subcategories[0];
                
                // Construct path based on folder structure
                // Assuming assets/media/[Folder]/[Image]
                let imgPath = `assets/media/${cat.folder}/${sub.image}`;
                
                // Randomize price a bit for demo
                const prices = ["10.000", "15.000", "25.000", "50.000"];
                const price = prices[Math.floor(Math.random() * prices.length)];

                const html = `
                    <div class="service-card">
                        <div class="service-img-box">
                            <img src="${imgPath}" alt="${sub.title}" onerror="this.src='${cat.image}'">
                        </div>
                        <div class="service-info">
                            <h5 class="service-name">${sub.title}</h5>
                            <div class="service-meta">
                                <span class="service-rating"><i class="fas fa-star"></i> 4.8</span>
                                <span class="service-reviews">(120 avis)</span>
                            </div>
                            <div class="service-price">À partir de ${price} FCFA</div>
                            <div class="service-actions">
                                <a href="service-details.html?category=${cat.id}&service=${encodeURIComponent(sub.title)}" class="btn-view">Détails</a>
                                <a href="flight-booking.html?category=${cat.id}&service=${encodeURIComponent(sub.title)}" class="btn-book">Commander</a>
                            </div>
                        </div>
                    </div>
                `;
                container.append(html);
                count++;
            }
        });
    }

})(jQuery);
