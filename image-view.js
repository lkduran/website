// Image View Page JavaScript
class ImageViewer {
    constructor() {
        this.images = [];
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.loadImages();
        this.bindEvents();
        this.loadImageFromURL();
    }

    loadImages() {
        // Same image data as in gallery.js
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
    }

    bindEvents() {
        const prevBtn = document.getElementById('prev-image');
        const nextBtn = document.getElementById('next-image');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.showPreviousImage());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.showNextImage());
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    this.showPreviousImage();
                    break;
                case 'ArrowRight':
                    this.showNextImage();
                    break;
                case 'Escape':
                    window.location.href = 'gallery.html';
                    break;
            }
        });
    }

    loadImageFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const imageIndex = urlParams.get('image');
        
        if (imageIndex !== null && !isNaN(imageIndex)) {
            this.currentIndex = parseInt(imageIndex);
            if (this.currentIndex < 0 || this.currentIndex >= this.images.length) {
                this.currentIndex = 0;
            }
        }
        
        this.displayCurrentImage();
    }

    displayCurrentImage() {
        const image = this.images[this.currentIndex];
        if (!image) return;

        // Update page elements
        document.getElementById('main-image').src = image.src;
        document.getElementById('main-image').alt = image.title;
        document.getElementById('image-title').textContent = image.title;
        document.getElementById('image-description').textContent = image.description;
        document.getElementById('image-category-tag').textContent = image.category.charAt(0).toUpperCase() + image.category.slice(1);
        document.getElementById('page-title').textContent = `${image.title} | Leah Duran`;

        // Update navigation buttons
        this.updateNavigationButtons();
        
        // Update URL without page reload
        const newUrl = `${window.location.pathname}?image=${this.currentIndex}`;
        window.history.replaceState({}, '', newUrl);
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-image');
        const nextBtn = document.getElementById('next-image');
        
        if (prevBtn && nextBtn) {
            // Always enable both buttons for cycling
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }
    }

    showPreviousImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.displayCurrentImage();
    }

    showNextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.displayCurrentImage();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ImageViewer();
});
