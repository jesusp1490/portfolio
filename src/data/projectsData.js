const projectsData = [
    {
        title: 'BeerHub',
        description: 'BeerHub is a global platform designed for beer enthusiasts to discover, rate, and favorite beers from around the world. Currently in early access, the platform starts with 10 brands from Spain and Portugal, with new countries and regions added weekly.',
        imageUrl: 'https://res.cloudinary.com/dizd9f3ky/image/upload/v1728996380/hb-mu_bezcm8.webp', 
        repoUrl: 'https://github.com/jesusp1490/beer-hub',
        demoUrl: 'https://beerhub.es/home', 
        techIcons: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg'
        ],
        category: 'web',
        features: [
            'Explore beers with detailed information',
            'Rate and favorite beers',
            'Request new beers',
            'Advanced filters for beer search',
            'Top rated beers and popular brands',
            'Interactive map for beer exploration'
        ],
        challenges: 'One of the main challenges was implementing the interactive map using D3.js to visualize beer locations by country. We overcame this by creating a custom SVG world map and integrating it with Firebase data for real-time updates.'
    },
    {
        title: 'Lucky',
        description: 'Lucky is an app for adopting animals. In this app, both users who wish to adopt a pet and animal shelters can register to showcase the animals available for adoption. This way, users can choose the pet that suits them best. The app has been developed using React, Node.js, Express.js, and MongoDB.',
        imageUrl: 'https://res.cloudinary.com/dizd9f3ky/image/upload/v1706617952/LuckyMockUp2_s60wsy.jpg',
        repoUrl: 'https://github.com/jesusp1490/Protectora-FrontEnd',
        demoUrl: 'https://lucky-adoption.netlify.app',
        techIcons: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
        ],
        category: 'mobile',
        features: [
            'User registration and authentication',
            'Animal listing and search functionality',
            'Adoption request system',
            'Shelter management dashboard'
        ],
        challenges: 'One of the main challenges was implementing a real-time update system for animal availability. We solved this by using WebSockets to ensure immediate updates across all connected clients.'
    },
    {
        title: 'Beats - Landing Page',
        description: 'Beats - Landing Page is a small personal project where I`ve created a replica of BEATS`s landing page using HTML, CSS and JavaScript.',
        imageUrl: 'https://res.cloudinary.com/dizd9f3ky/image/upload/v1721998998/Beats-replik_g7ggbt.jpg',
        repoUrl: 'https://github.com/jesusp1490/Beats-LandingPage-Replica',
        demoUrl: 'https://beats-landing-replica.netlify.app',
        techIcons: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        ],
        category: 'web',
        features: [
            'Responsive design',
            'Interactive product showcase',
            'Animated transitions',
            'Cross-browser compatibility'
        ],
        challenges: 'The main challenge was accurately replicating the complex animations and transitions of the original Beats website. This was overcome by using a combination of CSS animations and JavaScript to achieve smooth, performant animations across different devices.'
    },
    {
        title: 'GameStore',
        description: 'GameStore is a small video game shop where users can enter, register, and "purchase" games. They can explore top-rated games and filter them by price. It`s built using JavaScript, Node.js, Express.js, and MongoDB.',
        imageUrl: 'https://res.cloudinary.com/dizd9f3ky/image/upload/v1706705679/LuckyMockUp3_ax9ujg.jpg',
        repoUrl: 'https://github.com/jesusp1490/GameStore-Project',
        demoUrl: 'https://gamestore-project.herokuapp.com',
        techIcons: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
        ],
        category: 'web',
        features: [
            'User authentication and registration',
            'Game catalog with filtering and sorting options',
            'Shopping cart functionality',
            'Mock checkout process'
        ],
        challenges: 'Implementing a secure and efficient shopping cart system was challenging. We resolved this by using session storage and MongoDB to persist cart data, ensuring a seamless shopping experience even if the user closes the browser.'
    },
    {
        title: 'BMW - Landing Page',
        description: 'BWM - Landing Page is an academic project where I`ve created a replica of BMW`s landing page using HTML and SASS.',
        imageUrl: 'https://res.cloudinary.com/dizd9f3ky/image/upload/v1706706406/LuckyMockUp4_qngirs.jpg',
        repoUrl: 'https://github.com/jesusp1490/BMW-Project',
        demoUrl: 'https://bmw-landing-replica.netlify.app',
        techIcons: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg'
        ],
        category: 'mobile',
        features: [
            'Responsive design using Bootstrap',
            'Custom SASS styles for unique BMW branding',
            'Interactive vehicle showcase',
            'Optimized images for fast loading'
        ],
        challenges: "The biggest challenge was balancing the need for a pixel-perfect replica with the requirement for a responsive design. This was addressed by using a combination of Bootstrap's grid system and custom SASS mixins to ensure the design looked great on all screen sizes."
    },
    {
        title: 'Slack - Landing Page',
        description: 'Slack - Landing Page is an academic project where I`ve created a replica of Slack`s landing page using HTML and CSS.',
        imageUrl: 'https://res.cloudinary.com/dizd9f3ky/image/upload/v1706711558/LuckyMockUp5_rwujau.jpg',
        repoUrl: 'https://github.com/jesusp1490/Slack-Project',
        demoUrl: 'https://slack-landing-replica.netlify.app',
        techIcons: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        ],
        category: 'mobile',
        features: [
            "Faithful recreation of Slack's design",
            'Responsive layout for mobile and desktop',
            'CSS animations for enhanced user experience',
            'Accessibility considerations in HTML structure'
        ],
        challenges: "Replicating Slack's complex layout and ensuring it remained responsive was the primary challenge.This was overcome by using CSS Grid and Flexbox, along with media queries to adjust the layout at different breakpoints."
    }
];

export default projectsData;