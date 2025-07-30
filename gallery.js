// Custom Image Gallery with Thumbnail Navigation
class ImageGallery {
    constructor() {
        this.images = [];
        this.init();
    }

    init() {
        this.loadImages();
    }

    bindGalleryEvents() {
        // Use event delegation for better performance
        const artworkGrid = document.querySelector('.artwork-grid');
        if (artworkGrid) {
            // Throttle hover effects for better performance
            let hoverTimeout;
            
            artworkGrid.addEventListener('mouseenter', (e) => {
                const galleryItem = e.target.closest('.gallery-item');
                if (galleryItem) {
                    clearTimeout(hoverTimeout);
                    hoverTimeout = setTimeout(() => {
                        galleryItem.classList.add('hover-active');
                    }, 50);
                }
            }, true);
            
            artworkGrid.addEventListener('mouseleave', (e) => {
                const galleryItem = e.target.closest('.gallery-item');
                if (galleryItem) {
                    clearTimeout(hoverTimeout);
                    galleryItem.classList.remove('hover-active');
                }
            }, true);
            
            artworkGrid.addEventListener('click', (e) => {
                // Look for the gallery item container first
                const galleryItem = e.target.closest('.gallery-item');
                if (galleryItem) {
                    e.preventDefault();
                    // Find the image within this gallery item
                    const img = galleryItem.querySelector('.gallery-image');
                    if (img) {
                        const index = parseInt(img.dataset.index);
                        // Navigate to image view page
                        window.location.href = `image-view.html?image=${index}`;
                    }
                }
            });
        }
    }

    loadImages() {
        // Your actual artwork collection
        this.images = [
            // Watercolor Paintings
            {
                src: 'images/watercolor brain cells.jpg',
                thumb: 'images/watercolor brain cells.jpg',
                title: 'Brain Cells',
                description: 'Watercolor study exploring organic cellular structures with flowing, interconnected forms.',
                category: 'watercolor'
            },
            {
                src: 'images/watercolor deep sea creatures 1.jpg',
                thumb: 'images/watercolor deep sea creatures 1.jpg',
                title: 'Deep Sea Creatures I',
                description: 'Watercolor painting of mysterious deep ocean life, capturing the ethereal beauty of underwater creatures.',
                category: 'watercolor'
            },
            {
                src: 'images/watercolor deep sea creatures 2.jpg',
                thumb: 'images/watercolor deep sea creatures 2.jpg',
                title: 'Deep Sea Creatures II',
                description: 'Second exploration of deep sea life, focusing on translucent forms and bioluminescent qualities.',
                category: 'watercolor'
            },
            {
                src: 'images/watercolor eyes.jpg',
                thumb: 'images/watercolor eyes.jpg',
                title: 'Eyes Study',
                description: 'Watercolor study of eyes, exploring emotion and expression through color and form.',
                category: 'watercolor'
            },
            {
                src: 'images/watercolor flow.jpg',
                thumb: 'images/watercolor flow.jpg',
                title: 'Flow',
                description: 'Abstract watercolor piece exploring the natural flow and movement of pigment on paper.',
                category: 'watercolor'
            },
            {
                src: 'images/watercolor symbols.jpg',
                thumb: 'images/watercolor symbols.jpg',
                title: 'Symbols',
                description: 'Watercolor composition featuring symbolic elements and mystical imagery.',
                category: 'watercolor'
            },
            {
                src: 'images/watercolor verbena.jpg',
                thumb: 'images/watercolor verbena.jpg',
                title: 'Verbena',
                description: 'Botanical watercolor study of verbena flowers, capturing delicate petals and natural color variations.',
                category: 'watercolor'
            },
            {
                src: 'images/watercolor vines.jpg',
                thumb: 'images/watercolor vines.jpg',
                title: 'Vines',
                description: 'Watercolor painting of climbing vines, exploring organic growth patterns and natural forms.',
                category: 'watercolor'
            },
            
            // Graphite Drawings
            {
                src: 'images/graphite caterpillar.jpg',
                thumb: 'images/graphite caterpillar.jpg',
                title: 'Caterpillar',
                description: 'Detailed graphite drawing of a caterpillar, showcasing texture and form through careful shading.',
                category: 'graphite'
            },
            {
                src: 'images/graphite crab claw.jpg',
                thumb: 'images/graphite crab claw.jpg',
                title: 'Crab Claw',
                description: 'Precise graphite study of a crab claw, emphasizing anatomical detail and surface texture.',
                category: 'graphite'
            },
            {
                src: 'images/graphite crab.jpg',
                thumb: 'images/graphite crab.jpg',
                title: 'Crab',
                description: 'Complete graphite drawing of a crab, demonstrating understanding of crustacean anatomy.',
                category: 'graphite'
            },
            {
                src: 'images/graphite fish.jpg',
                thumb: 'images/graphite fish.jpg',
                title: 'Fish',
                description: 'Graphite drawing of a fish, capturing scales, fins, and aquatic form with detailed shading.',
                category: 'graphite'
            },
            {
                src: 'images/graphite hole.jpg',
                thumb: 'images/graphite hole.jpg',
                title: 'Hole',
                description: 'Graphite study exploring depth and shadow, creating the illusion of a three-dimensional opening.',
                category: 'graphite'
            },
            {
                src: 'images/graphite magician trick.jpg',
                thumb: 'images/graphite magician trick.jpg',
                title: 'Magician Trick',
                description: 'Graphite illustration of a magic trick, combining realism with elements of illusion and mystery.',
                category: 'graphite'
            },
            {
                src: 'images/graphite mantis.jpg',
                thumb: 'images/graphite mantis.jpg',
                title: 'Mantis',
                description: 'Detailed graphite drawing of a praying mantis, showcasing insect anatomy and predatory posture.',
                category: 'graphite'
            },
            {
                src: 'images/graphite monster.jpg',
                thumb: 'images/graphite monster.jpg',
                title: 'Monster',
                description: 'Creative graphite drawing of an imaginary creature, blending realistic technique with fantasy elements.',
                category: 'graphite'
            },
            {
                src: 'images/graphite pufferfish.jpg',
                thumb: 'images/graphite pufferfish.jpg',
                title: 'Pufferfish',
                description: 'Graphite study of a pufferfish, capturing the unique texture and defensive posture of this marine creature.',
                category: 'graphite'
            },
            {
                src: 'images/graphite seahorse.jpg',
                thumb: 'images/graphite seahorse.jpg',
                title: 'Seahorse',
                description: 'Delicate graphite drawing of a seahorse, emphasizing the creature\'s unique form and intricate details.',
                category: 'graphite'
            },
            {
                src: 'images/graphite sew.jpg',
                thumb: 'images/graphite sew.jpg',
                title: 'Sewing',
                description: 'Graphite drawing exploring the theme of sewing, with careful attention to thread, fabric, and tools.',
                category: 'graphite'
            },
            {
                src: 'images/graphite web.jpg',
                thumb: 'images/graphite web.jpg',
                title: 'Web',
                description: 'Intricate graphite drawing of a spider web, demonstrating precision and understanding of natural patterns.',
                category: 'graphite'
            },
            
            // Ink Drawing
            {
                src: 'images/ink butterfly.jpg',
                thumb: 'images/ink butterfly.jpg',
                title: 'Butterfly',
                description: 'Ink drawing of a butterfly, showcasing bold lines and contrast in this delicate winged creature.',
                category: 'ink'
            }
        ];

        this.renderGallery();
    }

    renderGallery() {
        const artworkGrid = document.querySelector('.artwork-grid');
        if (!artworkGrid) return;

        // Clear existing placeholder content
        artworkGrid.innerHTML = '';

        // Create filter buttons
        const categories = [...new Set(this.images.map(img => img.category))];
        const filterHTML = `
            <div class="gallery-filters">
                <button class="filter-btn active" data-filter="all">All</button>
                ${categories.map(cat => 
                    `<button class="filter-btn" data-filter="${cat}">${cat.charAt(0).toUpperCase() + cat.slice(1)}</button>`
                ).join('')}
            </div>
        `;
        
        artworkGrid.insertAdjacentHTML('beforebegin', filterHTML);

        // Create gallery grid with optimized loading
        const galleryHTML = this.images.map((image, index) => `
            <div class="gallery-item" data-category="${image.category}">
                <div class="gallery-image-container">
                    <img src="${image.thumb}" 
                         alt="${image.title}" 
                         class="gallery-image" 
                         data-index="${index}"
                         loading="lazy"
                         decoding="async"
                         width="280"
                         height="180">
                    <div class="gallery-overlay">
                        <div class="gallery-overlay-content">
                            <h4>${image.title}</h4>
                            <p>Click to view</p>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        artworkGrid.innerHTML = galleryHTML;

        // Bind filter events
        this.bindFilterEvents();
        
        // Bind gallery image click events
        this.bindGalleryEvents();
    }

    bindFilterEvents() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;

                // Use requestAnimationFrame for smoother filtering
                requestAnimationFrame(() => {
                    galleryItems.forEach(item => {
                        if (filter === 'all' || item.dataset.category === filter) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
        });
    }

}

// Initialize gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ImageGallery();
});
