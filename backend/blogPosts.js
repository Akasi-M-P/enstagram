const blogPosts = [
  {
    id: 1,
    author: {
      name: "Sarah Chen ✨",
      profession: "Tech Blogger & UI Designer 🎨",
      profilePicture:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "The Future of Web Design: Trends to Watch in 2025",
      content:
        "As we step into 2025, web design continues to evolve at breakneck speed. From AI-powered layouts to immersive 3D experiences, designers are pushing boundaries like never before. In this comprehensive guide, we'll explore the top 10 trends that are reshaping the digital landscape. Minimalism meets maximalism in unexpected ways, creating interfaces that are both clean and expressive...",
      numberOfLikes: 342,
      numberOfComments: 28,
    },
  },
  {
    id: 2,
    author: {
      name: "Marcus Rodriguez",
      profession: "Full Stack Developer 💻",
      profilePicture:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "Building Scalable APIs with Node.js and GraphQL",
      content:
        "GraphQL has revolutionized how we think about API design. Unlike REST APIs that often lead to over-fetching or under-fetching of data, GraphQL gives clients the power to request exactly what they need. In this tutorial, we'll build a production-ready API from scratch, covering authentication, caching, and performance optimization strategies...",
      numberOfLikes: 567,
      numberOfComments: 45,
    },
  },
  {
    id: 3,
    author: {
      name: "Emma Thompson 🌟",
      profession: "Content Creator & Digital Nomad ✈️",
      profilePicture:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "10 Hidden Gems in Southeast Asia You Must Visit",
      content:
        "After spending 18 months traveling through Southeast Asia, I've discovered some truly magical places that most tourists never see. From secret waterfalls in Laos to underground caves in Vietnam, these destinations will take your breath away. Pack light, bring your sense of adventure, and prepare for the journey of a lifetime...",
      numberOfLikes: 891,
      numberOfComments: 73,
    },
  },
  {
    id: 4,
    author: {
      name: "Dr. James Wilson",
      profession: "Data Scientist & AI Researcher 🤖",
      profilePicture:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "Machine Learning Explained: A Beginner's Guide",
      content:
        "Machine learning doesn't have to be intimidating. At its core, it's about teaching computers to recognize patterns and make decisions based on data. Think of it like teaching a child to recognize different animals - you show them many examples until they can identify new ones on their own. In this guide, we'll break down complex concepts into digestible pieces...",
      numberOfLikes: 1203,
      numberOfComments: 156,
    },
  },
  {
    id: 5,
    author: {
      name: "Isabella Garcia 🍳",
      profession: "Chef & Food Blogger 👨‍🍳",
      profilePicture:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "Mastering French Pastries: Croissants from Scratch",
      content:
        "There's nothing quite like the satisfaction of biting into a perfectly flaky croissant that you made with your own hands. The process is meditative, the technique is ancient, and the results are absolutely divine. Today, I'll walk you through every step of creating authentic French croissants, from mixing the dough to achieving that golden, buttery perfection...",
      numberOfLikes: 756,
      numberOfComments: 94,
    },
  },
  {
    id: 6,
    author: {
      name: "Alex Kim 🎵",
      profession: "Music Producer & Sound Engineer 🎧",
      profilePicture:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "The Art of Home Recording: Building Your First Studio",
      content:
        "You don't need a million-dollar studio to create professional-sounding music. With the right knowledge and a modest budget, you can set up a home recording space that rivals expensive commercial studios. From acoustic treatment to choosing the right microphones, I'll share the secrets I've learned from 15 years in the music industry...",
      numberOfLikes: 423,
      numberOfComments: 67,
    },
  },
  {
    id: 7,
    author: {
      name: "Rachel Green 🌱",
      profession: "Sustainability Expert & Eco Blogger 🌍",
      profilePicture:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "Zero Waste Living: Small Changes, Big Impact",
      content:
        "Living zero waste isn't about perfection - it's about making conscious choices that reduce our environmental footprint. Over the past three years, I've reduced my household waste by 95% without sacrificing comfort or convenience. Here are the practical strategies that made the biggest difference, plus some surprising discoveries along the way...",
      numberOfLikes: 634,
      numberOfComments: 112,
    },
  },
  {
    id: 8,
    author: {
      name: "David Park 📚",
      profession: "History Professor & Author ✍️",
      profilePicture:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "The Untold Stories of Ancient Civilizations",
      content:
        "History textbooks often focus on wars and politics, but what about the daily lives of ordinary people? Archaeological discoveries are revealing fascinating details about how ancient civilizations actually lived, loved, and laughed. From Roman graffiti to Egyptian love letters, these artifacts paint a surprisingly relatable picture of our ancestors...",
      numberOfLikes: 489,
      numberOfComments: 38,
    },
  },
  {
    id: 9,
    author: {
      name: "Luna Martinez 🧘‍♀️",
      profession: "Yoga Instructor & Wellness Coach 🕉️",
      profilePicture:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "Finding Inner Peace in a Chaotic World",
      content:
        "In our hyper-connected, always-on world, finding moments of peace can feel impossible. But what if I told you that tranquility isn't about escaping the chaos, but learning to find stillness within it? Through simple mindfulness practices and breathing techniques, you can create an oasis of calm wherever you are...",
      numberOfLikes: 812,
      numberOfComments: 89,
    },
  },
  {
    id: 10,
    author: {
      name: "Tom Anderson 🏋️‍♂️",
      profession: "Fitness Coach & Nutritionist 💪",
      profilePicture:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "Strength Training for Beginners: Your First 30 Days",
      content:
        "Starting a fitness journey can be overwhelming, but it doesn't have to be. Forget complicated routines and expensive equipment - all you need is consistency and the right mindset. This 30-day program focuses on building fundamental movement patterns and establishing habits that will serve you for life. No gym intimidation, no complex rules...",
      numberOfLikes: 923,
      numberOfComments: 145,
    },
  },
  {
    id: 11,
    author: {
      name: "Sophie Laurent 🎨",
      profession: "Digital Artist & NFT Creator 🖼️",
      profilePicture:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "The Digital Renaissance: Art in the Blockchain Era",
      content:
        "We're witnessing a revolution in how art is created, owned, and valued. NFTs have opened doors for digital artists worldwide, but the real story goes deeper than headlines suggest. As someone who's been creating digital art for over a decade, I've seen firsthand how blockchain technology is reshaping artistic expression and community building...",
      numberOfLikes: 675,
      numberOfComments: 92,
    },
  },
  {
    id: 12,
    author: {
      name: "Carlos Mendez 🚗",
      profession: "Automotive Engineer & EV Enthusiast ⚡",
      profilePicture:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "Electric Vehicles: The Road to a Sustainable Future",
      content:
        "The automotive industry is undergoing its biggest transformation since the invention of the assembly line. Electric vehicles are no longer a futuristic concept - they're here, they're practical, and they're changing everything. From battery technology breakthroughs to charging infrastructure, let's explore what this electric revolution means for drivers...",
      numberOfLikes: 534,
      numberOfComments: 76,
    },
  },
  {
    id: 13,
    author: {
      name: "Maya Patel 📸",
      profession: "Travel Photographer & Visual Storyteller 🌎",
      profilePicture:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "Capturing Moments: The Poetry of Street Photography",
      content:
        "Street photography isn't just about technical skill - it's about seeing the extraordinary in the ordinary. Every corner, every face, every fleeting moment tells a story waiting to be captured. After photographing in 40 countries, I've learned that the best shots often happen when you least expect them. Here's how to develop your eye for the decisive moment...",
      numberOfLikes: 789,
      numberOfComments: 103,
    },
  },
  {
    id: 14,
    author: {
      name: "Oliver Smith 💼",
      profession: "Entrepreneur & Business Strategist 📈",
      profilePicture:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "From Idea to IPO: Lessons from Building a Startup",
      content:
        "Three years ago, I had nothing but an idea scribbled on a napkin. Today, that idea has grown into a company valued at $50 million. The journey wasn't glamorous - it was filled with sleepless nights, difficult decisions, and moments of doubt. But every challenge taught me something valuable about business, leadership, and perseverance...",
      numberOfLikes: 1456,
      numberOfComments: 203,
    },
  },
  {
    id: 15,
    author: {
      name: "Zara Ahmed 🏡",
      profession: "Interior Designer & Home Stylist 🛋️",
      profilePicture:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "Small Spaces, Big Style: Maximizing Your Home's Potential",
      content:
        "Living in a small space doesn't mean sacrificing style or functionality. With clever design tricks and strategic planning, even the tiniest apartment can feel spacious and luxurious. I've transformed dozens of cramped spaces into stunning homes, and today I'm sharing my favorite techniques for making small spaces work harder and look better...",
      numberOfLikes: 612,
      numberOfComments: 87,
    },
  },
  {
    id: 16,
    author: {
      name: "Dr. Kevin Liu 🧠",
      profession: "Neuroscientist & Brain Health Expert 🔬",
      profilePicture:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "The Science of Sleep: Optimizing Your Rest for Peak Performance",
      content:
        "Sleep isn't a luxury - it's a biological necessity that affects every aspect of our health and performance. Recent neuroscience research has revealed incredible insights about what happens in our brains during sleep and how we can optimize this crucial process. From circadian rhythms to dream cycles, understanding sleep science can transform your life...",
      numberOfLikes: 945,
      numberOfComments: 134,
    },
  },
  {
    id: 17,
    author: {
      name: "Aria Rossi 🎭",
      profession: "Theater Director & Acting Coach 🎪",
      profilePicture:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "The Magic of Live Performance in a Digital Age",
      content:
        "In a world dominated by screens and streaming, there's something irreplaceable about live theater. The energy between performers and audience, the shared experience of storytelling, the risk and spontaneity - these elements create magic that no digital medium can replicate. As theaters adapt to modern audiences, we're discovering new ways to keep this ancient art form vital...",
      numberOfLikes: 387,
      numberOfComments: 52,
    },
  },
  {
    id: 18,
    author: {
      name: "Jake Morrison 🌊",
      profession: "Marine Biologist & Ocean Conservationist 🐋",
      profilePicture:
        "https://images.unsplash.com/photo-1549068106-b024baf5062d?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "Exploring the Deep: Mysteries of Our Ocean's Final Frontier",
      content:
        "We know more about the surface of Mars than we do about our own ocean depths. Every dive reveals new species, unexpected ecosystems, and phenomena that challenge our understanding of life on Earth. From bioluminescent creatures to underwater mountains, the deep ocean is our planet's last great frontier - and it's under threat...",
      numberOfLikes: 723,
      numberOfComments: 98,
    },
  },
  {
    id: 19,
    author: {
      name: "Priya Sharma 📱",
      profession: "UX Designer & App Developer 📲",
      profilePicture:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "Designing for Accessibility: Creating Apps for Everyone",
      content:
        "Great design isn't just beautiful - it's inclusive. When we design with accessibility in mind, we create better experiences for everyone, not just users with disabilities. Through real case studies and practical examples, I'll show you how accessibility considerations can actually improve your app's usability, reach, and overall success...",
      numberOfLikes: 856,
      numberOfComments: 119,
    },
  },
  {
    id: 20,
    author: {
      name: "Ryan O'Connor 🎮",
      profession: "Game Developer & Interactive Media Designer 🕹️",
      profilePicture:
        "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "The Psychology of Game Design: Why We Play",
      content:
        "What makes a game addictive? Why do some players spend thousands of hours in virtual worlds? As game developers, understanding player psychology isn't just useful - it's essential. From reward systems to narrative structure, every design decision taps into fundamental aspects of human nature. Let's explore the science behind what makes games so compelling...",
      numberOfLikes: 1122,
      numberOfComments: 167,
    },
  },
  {
    id: 21,
    author: {
      name: "Amara Jackson 🌙",
      profession: "Astrophysicist & Space Educator 🚀",
      profilePicture:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    },
    blog: {
      title: "Journey to the Stars: The Future of Space Exploration",
      content:
        "We're living in a golden age of space exploration. Private companies are launching rockets, rovers are discovering ancient water on Mars, and the James Webb telescope is revealing galaxies from the dawn of time. But this is just the beginning. The next decade will bring missions to Europa, asteroid mining, and perhaps even the first human steps on Mars...",
      numberOfLikes: 1334,
      numberOfComments: 201,
    },
  },
];

module.exports = blogPosts;

// For browser environments, you can access this via:
console.log("Blog posts loaded:", blogPosts.length, "posts");
