(function($) {
    // Populate Index Slider with Larger Cards and Scrolling Subcategory IMAGES
    if ($("#categories-slider-container").length && window.categoriesData) {
        const container = $("#categories-slider-container");
        window.categoriesData.forEach(cat => {
            
            // Build HTML for scrolling subcategory images
            let subImagesHtml = '';
            // Duplicate the list to ensure smooth infinite scrolling
            const loopCount = 4; 
            for(let i=0; i<loopCount; i++) {
                cat.subcategories.forEach(sub => {
                    // Path to subcategory image
                    const subImagePath = `assets/media/${cat.folder}/${sub.image}`;
                    subImagesHtml += `
                        <div class="sub-item" style="display: inline-block; margin-right: 15px; text-align: center; vertical-align: top; width: 80px;">
                            <div style="width: 60px; height: 60px; border-radius: 50%; overflow: hidden; margin: 0 auto 5px auto; border: 2px solid #f0f0f0;">
                                <img src="${subImagePath}" onerror="this.src='assets/media/logo moko.png'" alt="${sub.title}" style="width: 100%; height: 100%; object-fit: cover;">
                            </div>
                            <p style="font-size: 10px; line-height: 1.2; color: #555; white-space: normal; height: 24px; overflow: hidden;">${sub.title}</p>
                        </div>
                    `;
                });
            }

            const html = `
                <div class="flight-deal-block bg-white p-0 light-shadow rounded overflow-hidden" style="height: 100%;">
                    <div class="image-box" style="height: 250px; position: relative; overflow: hidden;">
                        <a href="service-details.html?id=${cat.id}">
                            <img src="${cat.image}" alt="${cat.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;">
                        </a>
                        <div class="category-badge" style="position: absolute; top: 16px; left: 16px; background: #E73C3E; color: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600;">Service</div>
                    </div>
                    <div class="content-box p-24">
                        <h5 class="color-black mb-16 fw-700 text-uppercase text-truncate"><a href="service-details.html?id=${cat.id}" style="text-decoration: none; color: inherit;">${cat.title}</a></h5>
                        
                        <!-- Scrolling Subcategories (Images + Title) -->
                        <div class="scrolling-text-container mb-16" style="overflow: hidden; white-space: nowrap; position: relative; background: #f8f9fa; padding: 10px 0; border-radius: 8px;">
                            <div class="scrolling-text" style="display: inline-block;">
                                ${subImagesHtml}
                            </div>
                        </div>

                        <div class="d-flex justify-content-between align-items-center mt-auto pt-16 border-top">
                            <a href="service-details.html?id=${cat.id}" class="cus-btn w-100 text-center" style="padding: 10px 20px; font-size: 14px;">Voir les sous-catégories</a>
                        </div>
                    </div>
                </div>
            `;
            container.append(html);
        });
    }

    // Populate Flight Listing Grid (Categories Page)
    if ($("#all-categories-grid").length && window.categoriesData) {
        const grid = $("#all-categories-grid");
        window.categoriesData.forEach(cat => {
            const subcatsList = cat.subcategories.map(sub => sub.title).join(' &nbsp; <span style="color:#E1E1E1">•</span> &nbsp; ');
            const marqueeContent = `${subcatsList} &nbsp; <span style="color:#E1E1E1">•</span> &nbsp; ${subcatsList}`;

            const html = `
                <div class="col-xl-4 col-lg-4 col-md-6 mb-32">
                    <div class="flight-deal-block bg-white p-0 light-shadow rounded overflow-hidden h-100 d-flex flex-column">
                        <div class="image-box" style="height: 250px; position: relative; overflow: hidden;">
                            <a href="service-details.html?id=${cat.id}">
                                <img src="${cat.image}" alt="${cat.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;">
                            </a>
                            <div class="category-badge" style="position: absolute; top: 16px; left: 16px; background: #E73C3E; color: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600;">Service</div>
                        </div>
                        <div class="content-box p-24 flex-grow-1 d-flex flex-column">
                            <h5 class="color-black mb-16 fw-700 text-uppercase text-truncate"><a href="service-details.html?id=${cat.id}" style="text-decoration: none; color: inherit;">${cat.title}</a></h5>
                            
                            <!-- Scrolling Subcategories -->
                            <div class="scrolling-text-container mb-16" style="overflow: hidden; white-space: nowrap; position: relative; background: #f8f9fa; padding: 8px; border-radius: 4px;">
                                <div class="scrolling-text" style="display: inline-block;">
                                    <p class="light-black text-small m-0 fw-500">${marqueeContent}</p>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between align-items-center mt-auto pt-16 border-top">
                                <a href="service-details.html?id=${cat.id}" class="cus-btn w-100 text-center" style="padding: 10px 20px; font-size: 14px;">Voir les sous-catégories</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            grid.append(html);
        });
    }

    // Handle Service Details Page
    if ($("#service-details-container").length && window.categoriesData) {
        const urlParams = new URLSearchParams(window.location.search);
        const catId = urlParams.get('id');
        
        if (catId) {
            const category = window.categoriesData.find(c => c.id === catId);
            if (category) {
                // Update Title
                $("#category-title").text(category.title);
                
                // Update Breadcrumb or Header if exists
                $(".title-banner h1").text(category.title);

                // Populate Subcategories Grid
                const subGrid = $("#subcategories-grid");
                category.subcategories.forEach(sub => {
                    // Try to find image, fallback to placeholder if needed
                    const imagePath = `assets/media/${category.folder}/${sub.image}`;
                    
                    const html = `
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-32">
                            <div class="service-block bg-white p-0 light-shadow rounded overflow-hidden h-100 d-flex flex-column">
                                <div class="image-box" style="height: 250px; position: relative; overflow: hidden;">
                                    <img src="${imagePath}" onerror="this.src='assets/media/logo moko.png'" alt="${sub.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;">
                                </div>
                                <div class="content-box p-24 flex-grow-1 d-flex flex-column">
                                    <h5 class="color-black mb-16 fw-600 text-center">${sub.title}</h5>
                                    
                                    <div class="d-flex justify-content-between align-items-center mt-auto pt-16 border-top">
                                        <div class="price">
                                            <h6 class="light-black mb-1 fw-500" style="font-size: 12px;">Tarif</h6>
                                            <h6 class="color-primary fw-700" style="font-size: 16px;">Sur devis</h6>
                                        </div>
                                        <a href="flight-booking.html" class="cus-btn small-pad shadow-sm" style="padding: 10px 20px; font-size: 14px;">Commander</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    subGrid.append(html);
                });
            }
        }
    }

    // Add CSS for scrolling text
    $("<style>")
    .prop("type", "text/css")
    .html(`
    @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }
    .scrolling-text {
        animation: marquee 20s linear infinite;
    }
    .scrolling-text:hover {
        animation-play-state: paused;
    }
    `)
    .appendTo("head");

})(jQuery);
