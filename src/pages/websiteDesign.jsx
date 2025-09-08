
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RecentClients from "../components/RecentClients";
import FeaturedWork from "../components/FeaturedWork";
import FaqsSection from "../components/FaqsSection";
import IndustriesSection from "../components/IndustriesSection";
import Insights from "../components/Insights";
import FooterIntro from "../components/FooterIntro";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactFormFormspree from '../components/ContactSection';
<link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet"></link>

const WebDesign = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

     

const services = [
    {
      id: 'website-design',
      title: 'Website Design',
      paragraph: 'As an award-winning web design agency, Brand Vision is dedicated to providing custom web design solutions that truly capture the unique character and style of our clients\' businesses.',
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            We understand that in today's digital landscape, it is more important than ever to have a website that stands out and effectively represents your brand. That's why our team of highly skilled and experienced <a href="https://www.brandvm.com/" className="underline text-blue-500 hover:text-blue-600 transition-colors">web designers</a> and developers is committed to creating visually stunning and user-friendly websites that not only look great, but also function effectively to help you achieve your business goals.
          </p>
          <p className="text-sm md:text-base mb-4">
            We take a holistic approach to <a href="https://www.brandvm.com/" className="underline text-blue-500 hover:text-blue-600 transition-colors">web design</a>, considering both the aesthetic and psychological aspects of the user experience to ensure that our designs are both subjectively beautiful and objectively functional. If you are looking for an award-winning web design agency that can deliver custom solutions that truly set your business apart, look no further than Brand Vision.
          </p>
        </>
      ),
      tags: ['Custom-Designed', 'In-Depth Testing', 'Animations', 'Fully Optimized', 'Mockups'],
    },
    {
      id: 'ui-ux',
      title: 'UI/UX',
      paragraph: 'Our UI/UX service creates immersive digital experiences that resonate with users. Our senior UI/UX team blends creativity and behavioral psychology to create award-winning websites and digital products.',
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            Our UI/UX designs focus on creating digital experiences that guide users throughout our websites. We prioritize user understanding and emotional investment, ensuring interfaces are intuitive and user-friendly. Our designs blend clear visuals, information hierarchy, and unique brand voices to move customers toward the best solutions.
          </p>
          <p className="text-sm md:text-base mb-4">
            We start by defining sitemaps and user flows, then create wireframes to finalize the information architecture and user touchpoints before designing visually stunning interfaces. Our goal is to attract and retain your ideal audience by putting their needs first.
          </p>
          <a href="/ui-ux-agency" className="inline-flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors">
            <span className="font-semibold underline">Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </>
      ),
      tags: ['Content Strategy', 'User-Centered', 'Accessibility', 'Iterative Testing', 'Data-Driven'],
    },
    {
      id: 'website-development',
      title: 'Website Development',
      paragraph: 'With a team of senior full-stack developers, we ensure your website resembles the designs perfectly. Our developers have a deep knowledge in various platforms to ensure your website is functional and responsive.',
      richText: (
        <>
          <p className="text-sm md:text-base mb-4">
            We focus on key aspects like <a href="https://www.brandvm.com/" className="underline text-blue-500 hover:text-blue-600 transition-colors">SEO optimization</a>, WCAG 2.1 compliance, robust security, and user-friendly management.
          </p>
          <p className="text-sm md:text-base mb-4">
            Our approach starts with meticulous planning alongside the design team, selecting the right tools like Elementor Pro or Gutenberg and mapping out essential modules. We then progress methodically, ensuring quality at every stage with frequent checks for seamless functionality.
          </p>
          <p className="text-sm md:text-base mb-4">
            As the site nears completion, our <a href="https://www.brandvm.com/" className="underline text-blue-500 hover:text-blue-600 transition-colors">SEO</a> experts conduct <a href="https://www.brandvm.com/" className="underline text-blue-500 hover:text-blue-600 transition-colors">audits</a>, while our team rigorously tests for security and accessibility. Every detail is thoroughly reviewed to ensure a synchronized rollout that aligns with both your technical and marketing strategies.
          </p>
        </>
      ),
      tags: ['Advanced Technical Expertise', 'Scalable & Secure Solutions', 'Post-Launch Support', 'Quality Assurance'],
    },
  ];

  const smallServices = [
    {
      id: 'future-proof-strategies',
      title: 'Future-Proof Strategies',
      richText: 'Implementing forward-thinking approaches to ensure your website remains relevant and effective as technology evolves.',
    },
    {
      id: 'senior-team',
      title: 'Senior Team',
      richText: 'Our websites are designed under the guidance of senior-level managers and designers for strategic, high-quality results.',
    },
    {
      id: 'custom-designs',
      title: 'Custom Designs',
      richText: 'Tailored and unique web designs that reflect your brand identity, industry, and business goals.',
    },
    {
      id: 'partnership',
      title: 'Partnership',
      richText: 'Experience true collaboration as we closely partner with you, leveraging your insights and industry expertise to set goals.',
    },
    {
      id: 'seo-focused',
      title: 'SEO Focused',
      richText: 'As the top SEO agency, our designs integrate Search Engine Optimization (SEO) best practices for improved visibility.',
    },
    {
      id: 'built-in-cms',
      title: 'Built-in CMS',
      richText: 'We recommend and implement leading Content Management Systems (CMS) for intuitive, user-friendly website management.',
    },
    {
      id: 'industry-expertise',
      title: 'Industry Expertise',
      richText: 'With extensive industry experience, we tailor teams to your industry, ensuring our solutions align perfectly with your goals and audience.',
    },
    {
      id: 'backed-by-strategy',
      title: 'Backed by Strategy',
      richText: 'Our websites are backed by thorough research and strategic thinking, ensuring they not only look great but also drive meaningful results.',
    },
  ];

  const ServiceCard = ({ service }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between min-h-[400px]">
        <div>
          <div
            className="flex items-center justify-between cursor-pointer mb-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center space-x-4 flex-1">
              <span className="h-3 w-3 bg-blue-500 rounded-full flex-shrink-0" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                {service.title}
              </h2>
            </div>
            <div className="h-6 w-6 relative flex-shrink-0 ml-4">
              <div 
                className={`absolute h-full w-0.5 bg-gray-900 top-0 left-1/2 -translate-x-1/2 transition-transform duration-300 ${
                  isOpen ? 'rotate-0' : 'rotate-90'
                }`} 
              />
              <div className="absolute h-0.5 w-full bg-gray-900 top-1/2 left-0 -translate-y-1/2" />
            </div>
          </div>
          
          <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
            {service.paragraph}
          </p>

          {isOpen && (
            <div className="mb-6 text-gray-700 animate-in slide-in-from-top duration-300">
              {service.richText}
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-medium">
              {tag}
            </span>
          ))}
          <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-medium">
            and more.
          </span>
        </div>
      </div>
    );
  };

  const SmallServiceCard = ({ service }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100  flex flex-col">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center  space-x-4 flex-1">
            <span className="h-3 w-3 bg-green-500 rounded-full flex-shrink-0" />
            <h4 className="text-lg font-bold text-gray-900 leading-tight">
              {service.title}
            </h4>
          </div>
          <div className="h-6 w-6 relative flex-shrink-0 ml-4">
            <div 
              className={`absolute h-full w-0.5 bg-gray-900 top-0 left-1/2 -translate-x-1/2 transition-transform duration-300 ${
                isOpen ? 'rotate-0' : 'rotate-90'
              }`} 
            />
            <div className="absolute h-0.5 w-full bg-gray-900 top-1/2 left-0 -translate-y-1/2" />
          </div>
        </div>
        
        {isOpen && (
          <div className="flex-1 animate-in mt-2 slide-in-from-top duration-300">
            <p className="text-gray-700 text-sm leading-relaxed">{service.richText}</p>
          </div>
        )}
      </div>
    );
  };
  const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
  });
  };
  const items = [
    {
      id: 1,
      title: "Deep Industry Experience and",
      highlight: "Client-Centric Approach",
      description: "At Brand Vision, we strategically utilize our deep industry expertise to develop custom website solutions tailored to each client's unique needs. Rather than adopting a one-size-fits-all approach, we meticulously design every website to align precisely with your specific business objectives and challenges. This client-centric approach ensures that every project is not just executed with precision but is also a perfect fit for your business, setting you apart in your market.",
      image: "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d4d7cf9b52a7779e62f10_Flipp.avif"
    },
    {
      id: 2,
      title: "Award-Winning, Senior-Level",
      highlight: "Expertise at Every Step",
      description: "We ensure that every project is overseen by senior professionals from start to finish. Brand Vision's team consists of award-winning experts in branding, web design, and user experience who bring a wealth of knowledge and creativity to each project. This level of expertise guarantees superior quality and innovative solutions that are designed not just to meet but exceed client expectations.",
      image: "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d4d7b765b6b416fa0eb20_Retina.avif"
    },
    {
      id: 3,
      title: "Trend-Driven and",
      highlight: "Customized Design",
      description: "At Brand Vision, we stay ahead of the curve by closely following the latest design trends, ensuring our web solutions are not only modern but also visionary. Each project is a unique creation, meticulously tailored to reflect each client's distinct brand identity, industry, and business goals. Our custom and trend-responsive designs guarantee that your website not only stands out in your industry but also remains effective and relevant as market dynamics evolve.",
      image: "https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d4d7bcf37920bc03e72f4_ReadyMode.avif"
    }
  ];

  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const processStages = [
    {
      id: 1,
      stage: "Stage 1",
      title: "Discovery",
      description: "In the web design Discovery phase, we deeply understand your business goals and audience needs. Our process involves tailored research, team meetings, and competitor analysis to identify your unique offerings. Using UX research methods, like interviews and surveys, we craft a user-centric web design for an enriched experience.",
      glowColor: "blue",
      steps: [
        {
          title: "Initial Discovery Meeting",
          items: [
            "Discuss project goals & objectives.",
            "Define industry, target audience, and stakeholders",
            "Competitor analysis. Discuss website style & visual elements.",
            "Discuss and review existing website analytics when applicable.",
            "Review design examples and discuss the client's vision.",
            "Provide navigation and page structure suggestions.",
            "Develop or evaluate the sitemap for reorganization.",
            "Develop a detailed project timeline.",
            "Invite the client to - Asana for project planning - Figma for viewing the prototyping - Google Drive for sharing content"
          ]
        },
        {
          title: "Competitor Research",
          items: [
            "Further research and identify industry competitors.",
            "Analyze competitor websites (structure, design, functionality, content).",
            "Perform competitor analysis via analytics, web crawl, and digital branding review.",
            "Assess competitor strengths and weaknesses (usability, content, reputation).",
            "Identify differentiation and improvement opportunities.",
            "Identify unique features/content for client website differentiation.",
            "Fill gaps in competitors' online presence."
          ]
        },
        {
          title: "Content Gathering",
          items: [
            "Request brand materials (e.g., logos, style guides).",
            "Obtain client content (e.g., text, images, videos).",
            "Identify content needs and/or gaps and provide recommendations.",
            "Develop content requirements (text, images, multimedia).",
            "Address legal/regulatory requirements (eg., webpages, blog posts, videos).",
            "Identify third-party content sources and ensure proper licensing/attribution."
          ]
        },
        {
          title: "Information Architecture",
          items: [
            "Define navigation structure and layout of pages.",
            "Identify main content categories and subcategories.",
            "Revise and finalize the high-level sitemap."
          ]
        },
        {
          title: "UX Research",
          items: [
            "Define user personas based on the target audience.",
            "Perform usability testing on existing or similar websites.",
            "Analyze user behaviours, preferences, and pain points.",
            "Analyze competitors' websites for user experience best practices and areas for improvement.",
            "Identify key User Experience Goals for the new website."
          ]
        },
        {
          title: "Defining KPIs",
          items: [
            "Identify measurable goals and KPIs for website.",
            "Determine metrics and tools to track and report success.",
            "Identify potential roadblocks/challenges for achieving KPIs."
          ]
        }
      ]
    },
    {
      id: 2,
      stage: "Stage 2",
      title: "Design",
      description: "In the design phase, we'll bring your website's vision to life. Leveraging Discovery insights, our team tailors designs to echo your brand and web design specific audience needs. Emphasizing visually captivating, user-friendly, responsive layouts across all devices, we present design mockups for your input, ensuring refinement until it perfectly matches your web design vision.",
      glowColor: "green",
      steps: [
        {
          title: "Style Guide Development",
          items: [
            "Define colour palette, typography, and visual hierarchy.",
            "Establish UI component style.",
            "Document design guidelines for future consistency.",
            "Determine link styles (underline, colour, hover effect).",
            "Establish additional design elements.",
            "Create a mood board for feedback from the client."
          ]
        },
        {
          title: "Wireframe Creation",
          items: [
            "Create a homepage wireframe and present it to the client.",
            "Wireframe unique page layouts to maximize efficiency.",
            "Create the wireframe for all pages based on the homepage approved wireframe.",
            "Identify important elements such as navigation and call-to-action buttons.",
            "Ensure the wireframe accommodates different screen sizes."
          ]
        },
        {
          title: "Mockup Design",
          items: [
            "Create a high-fidelity mockup from the approved wireframe for the home page and review it with the client.",
            "Create a high-fidelity mockup for the remaining pages based on the approved home page design.",
            "Apply style guide and mood board elements.",
            "Ensure the design is responsive for different devices.",
            "Review the complete mockup with the client and gather feedback."
          ]
        },
        {
          title: "Design Refinement",
          items: [
            "Revise the mockup based on client feedback.",
            "Revise the remaining pages based on the home page approved design and client feedback."
          ]
        },
        {
          title: "Responsive Design",
          items: [
            "Adapt approved designs for mobile and tablet.",
            "Ensure usability and consistency across different screen sizes.",
            "Determine breakpoints for layout changes on different device sizes.",
            "Optimize site load times on mobile and tablet devices.(In terms of design decisions)",
            "Ensure pop-ups/overlays work properly on various devices.",
            "Review responsive designs with clients and gather feedback.",
            "Revise mobile and tablet designs as necessary."
          ]
        },
        {
          title: "Preparing for Development",
          items: [
            "Prepare design files for the development phase.",
            "Export assets (e.g., images, icons, fonts) in appropriate formats.",
            "Create a design specification document detailing layout, spacing, and measurements.",
            "Collaborate with the development team to ensure a smooth transition.",
            "Review the design with developers and address any technical concerns.",
            "Establish a timeline and milestones for the development phase."
          ]
        }
      ]
    },
    {
      id: 3,
      stage: "Stage 3",
      title: "Development",
      description: "In the Development phase of web design, we transform approved designs into a functional website, using advanced technology and coding standards to ensure speed, security, and accessibility. We conduct extensive testing for optimal performance on various devices and browsers, and integrate tools like CMS and e-commerce platforms for enhanced functionality.",
      glowColor: "red",
      steps: [
        {
          title: "Platform Setup",
          items: [
            "Determine the website's technical requirements including its functionality, scalability, and security needs.",
            "Set up and configure the selected platform.",
            "Install necessary themes, plugins, or extensions",
            "Determine the necessary hardware and software requirements.",
            "Develop a testing strategy including unit testing, integration testing, and user acceptance testing."
          ]
        },
        {
          title: "Frontend Development",
          items: [
            "Convert designs to the best-suited code HTML, Java, CSS, React (as applicable).",
            "Ensure pixel-perfect implementation and adhere to design specs.",
            "Implement animations and interactions.",
            "Optimize code for performance, accessibility, and cross-browser compatibility.",
            "Integrate payment and shipment APIs, including multiple currencies if needed.",
            "Plan for SEO optimization and accessibility to meet WCAG standards if needed."
          ]
        },
        {
          title: "Content Management System (CMS)",
          items: [
            "Integrate frontend templates with CMS.",
            "Set up content structures and custom fields.",
            "Train clients to use CMS for content management.",
            "Integrate with third-party email marketing or CRM platform."
          ]
        },
        {
          title: "Application Integration",
          items: [
            "Integrate necessary third-party tools (e.g., e-commerce, analytics, email marketing).",
            "Configure and test integrations for seamless functionality."
          ]
        },
        {
          title: "Quality Assurance & Testing",
          items: [
            "Perform functional testing to ensure all features work as intended.",
            "Test website performance, load times, and optimization (e.g. Google PageSpeed Insights).",
            "Conduct accessibility testing to ensure compliance with relevant standards if needed.",
            "Create bug reports and work with the development team to resolve issues before launch."
          ]
        },
        {
          title: "Client Review",
          items: [
            "Present the developed website to the client for review.",
            "Address concerns or issues raised by the client.",
            "Obtain client approval for the final developed website."
          ]
        }
      ]
    },
    {
      id: 4,
      stage: "Stage 4",
      title: "Finalization",
      description: "In the Finalization phase of web design, we perfect the website with QA and user testing to eliminate errors. After ensuring top quality, we optimize for search engines, arrange hosting, enhance security, and provide documentation. Post-launch, we offer continuous support and maintenance for a dynamic digital presence.",
      glowColor: "blue",
      steps: [
        {
          title: "Cross-Browser Testing",
          items: [
            "Test the website on various browsers after launch (e.g., Chrome, Firefox, Safari).",
            "Test the website on different devices after launch (e.g., smartphones, tablets) and screen sizes.",
            "Ensure consistent appearance and functionality across different browsers."
          ]
        },
        {
          title: "Performance Optimization",
          items: [
            "Optimize website assets to reduce load times.",
            "Test website performance with tools like Google PageSpeed Insights after launch.",
            "Identify and prioritize areas needing performance improvement and implement optimization techniques.",
            "Implement caching techniques to reduce server load and improve load times for repeat visitors."
          ]
        },
        {
          title: "SEO Optimization",
          items: [
            "Optimize on-page SEO elements like meta tags and heading tags.",
            "Create and submit an XML sitemap to search engines.",
            "Perform technical SEO tasks, including minifying scripts and configuring structured data.",
            "Optimize website content with targeted keywords if required.",
            "Ensure clear website structure for search engine understanding.",
            "Set up Google Analytics and Search Console for website monitoring if required."
          ]
        },
        {
          title: "Final Client Review and Approval",
          items: [
            "Present the fully tested and optimized website to the client for review.",
            "Address any remaining concerns or issues raised by the client.",
            "Obtain client approval for launch."
          ]
        },
        {
          title: "Website Launch",
          items: [
            "Schedule and execute the website launch.",
            "Monitor the website closely for any issues during the initial launch period.",
            "Check that all SEO elements have been correctly implemented, including meta tags, titles, descriptions, and keywords."
          ]
        },
        {
          title: "Post-Launch Support",
          items: [
            "Provide training and support to website administrators to ensure they are equipped to manage the website.",
            "Provide ongoing support to address any issues that arise after launch.",
            "Monitor website performance, analytics, and user feedback.",
            "Implement updates and improvements based on feedback and data analysis."
          ]
        }
      ]
    }
  ];
  const getGlowClasses = (color) => {
    switch (color) {
      case 'green':
        return 'bg-green-400';
      case 'red':
        return 'bg-red-400';
      default:
        return 'bg-blue-400';
    }
  };
    return (
        <>
        <section className="relative z-10 text-[#f2f5f7] h-screen pb-16 overflow-hidden w-full px-4 md:px-12 py-28">
            {/* Background Image and Overlay */}
            <div className="absolute inset-0">
                <img
                    src="https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/66a921b2523b4292beddc3e5_Section.jpg"
                    alt="Background"
                    className="w-full h-full object-cover object-center sm:object-top md:object-center 
                     transform-gpu"
                />
                {/* Mobile: Strong black gradient from bottom to transparent top */}
                {/* Desktop: Light gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-3/4 sm:h-40 
                bg-gradient-to-t from-black via-black/80 to-transparent 
                sm:from-black/70 sm:via-transparent sm:to-transparent"></div>
            </div>

            {/* Content Wrapper - Hidden on mobile, visible on desktop */}
            <div className="relative z-20 max-w-6xl mx-auto h-full hidden md:flex flex-col justify-center md:flex-row md:items-center">
                {/* Left Side Content - Text Block */}
                <div className="flex-1 mt-40 md:mt-2 md:max-w-xl">
                    <h2 className="text-lg sm:text-base md:text-lg font-bold">Brand Vision | Web Design Services</h2>
                    <div className="h-0.5 w-1/2 bg-gray-200 my-4"></div>
                    <div>
                        <h1 className="text-base sm:text-lg md:text-xl font-semibold">Award-Winning Web Design Agency</h1>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm sm:text-base md:text-md leading-relaxed">
                            Brand Vision is a leading media and web design agency with extensive
                            experience in crafting custom-designed and expertly developed
                            websites. Our creative team takes pride in producing visually
                            striking, user-friendly platforms that excel in both user experience
                            and SEO.
                        </p>
                    </div>
                </div>

                {/* Right Side Content - Scroll Div - Hidden on mobile */}
                <div className="flex-1 flex justify-end items-end p-8 mt-8 md:mt-0">
                    <div className="text-xs tracking-widest origin-right border rounded-2xl p-1">
                        Scroll to explore
                    </div>
                </div>
            </div>

            {/* Mobile Content - Positioned at bottom over black gradient */}
            <div className="relative z-20 max-w-6xl mx-auto h-full flex md:hidden flex-col justify-end pb-32">
                <div className="px-2">
                    <h2 className="text-sm font-bold mb-2">Brand Vision | Web Design Services</h2>
                    <div className="h-0.5 w-full bg-gray-500 my-3"></div>
                    <div>
                        <h1 className="text-lg font-semibold mb-3">Award-Winning Web Design Agency</h1>
                    </div>
                    <div>
                        <p className="text-sm leading-relaxed">
                            Brand Vision is a leading media and web design agency with extensive
                            experience in crafting custom-designed and expertly developed
                            websites. Our creative team takes pride in producing visually
                            striking, user-friendly platforms that excel in both user experience
                            and SEO.
                        </p>
                    </div>
                </div>
            </div>

            {/* Background Text Animation */}
            <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }

                .marquee-container {
                    display: flex;
                    animation: marquee 10s linear infinite;
                    white-space: nowrap;
                }

                .marquee-item {
                    flex-shrink: 0;
                    padding-right: 4rem;
                }

                .text-hollow {
                    font-family: 'Prata', serif; /* Apply Prata font */
                    font-weight: 400;
                    color: transparent;
                    -webkit-text-stroke: 1px #ffffff;
                    text-stroke: 1px #ffffff;
                }

                @media (min-width: 640px) {
                    .text-hollow {
                        -webkit-text-stroke: 2px #ffffff;
                        text-stroke: 2px #ffffff;
                    }
                    .marquee-item {
                        padding-right: 6rem;
                    }
                }

                @media (min-width: 768px) {
                    .marquee-item {
                        padding-right: 8rem;
                    }
                }
                `}
            </style>
            
            {/* Marquee text - hidden on mobile, visible on desktop */}
            <div className="absolute bottom-6 sm:bottom-8 md:bottom-18 left-0 right-0 overflow-hidden text-6xl md:text-8xl lg:text-8xl font-extrabold ">
                <div className="marquee-container">
                    <div className="marquee-item">
                        <span className="text-hollow">Award Winning Website Design & Development Agency</span>
                    </div>
                    <div className="marquee-item">
                        <span className="text-hollow">Award Winning Website Design & Development Agency</span>
                    </div>
                    <div className="marquee-item">
                        <span className="text-hollow">Award Winning Website Design & Development Agency</span>
                    </div>
                    <div className="marquee-item">
                        <span className="text-hollow">Award Winning Website Design & Development Agency</span>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full bg-[#070d13] font-Inter text-[#f2f5f7] px-12 py-28">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center space-y-6">
          <div>
            <p className="text-lg font-semibold text-white">
              
              <a
                href="/"
                className="text-sm"
              >
                Top Web Design Agency
              </a>
            </p>
          </div>

          <h5 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
            We create beautiful websites{" "}
            <span className="block text-[#f2f5f7]/90">
              that drive business growth.
            </span>
          </h5>

          <div className="max-w-3xl mx-auto">
            <p className="text-base text-white leading-relaxed">
              Brand Vision is a leading media and web design agency with
              extensive experience in crafting custom-designed and expertly
              developed websites. Our creative team takes pride in producing
              visually striking, user-friendly platforms that excel in both user
              experience and SEO.
            </p>
          </div>
        </div>

        {/* Separator */}
        <div className="my-8 h-[1px] bg-white/20"></div>

        {/* Awards Section */}
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://www.awwwards.com/brandvision/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d47db67d58ced2f661103_Awwwards%20Logo.svg"
              alt="Awwwards Logo"
              className="h-10 object-contain"
            />
          </a>
          <a
            href="https://clutch.co/profile/brand-vision-1#reviews"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d47dcfa8d01daa6b85a7a_Clutch%20Logo.svg"
              alt="Clutch Logo"
              className="h-10 object-contain"
            />
          </a>
          <a href="https://g.co/kgs/qXiLS2M" target="_blank" rel="noreferrer">
            <img
              src="https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d47dc8bd93e0c3ceb94df_Generic%20Award.svg"
              alt="Generic Award Logo"
              className="h-10 object-contain"
            />
          </a>
          <a href="https://g.co/kgs/qXiLS2M" target="_blank" rel="noreferrer">
            <img
              src="https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d47db1a93a19ceda6299b_Google%20Reviews%20Logo.svg"
              alt="Google Reviews Logo"
              className="h-10 object-contain"
            />
          </a>
          <a
            href="https://upcity.com/profiles/brand-vision-marketing"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d47db73a1d5d1c49ab6c5_Upcity%20Logo.svg"
              alt="Upcity Logo"
              className="h-10 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
    <section className="w-full bg-white border-b border-[#070d130f] py-2 px-2 ">
      <div className="mx-5 flex flex-col md:flex-row justify-between items-center ">
        {/* Caption */}
        <div className="text-gray-600 text-sm  ">
          Made by industry standard tool
        </div>

        {/* Logos */}
        <div className="flex  gap-8">
          <a
            href="https://www.brandvm.com/sub-services/webflow-web-design"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <img
              src="https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d40d27be4802174c6b87e_Webflow%20Logo.svg"
              alt="Webflow Logo"
              className="h-6 md:h-8"
            />
          </a>
          <a
            href="https://www.brandvm.com/sub-services/wordpress-web-design"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <img
              src="https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d40d215ce2ccc82ef7d4b_WordPress%20Logo.svg"
              alt="WordPress Logo"
              className="h-6 md:h-8"
            />
          </a>
          <a
            href="https://www.brandvm.com/sub-services/wix-web-design"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform"
          >
            <img
              src="https://cdn.prod.website-files.com/630bc5625ada9a1e2dbb10a6/661d40d24763da1c10c4337a_Wix%20Logo.svg"
              alt="Wix Logo"
              className="h-6 md:h-8"
            />
          </a>
        </div>

        {/* Button */}
        <a
          href="#Featured-Projects"
          className="inline-flex items-center px-2 py-2 border border-gray-300 rounded-full text-gray-700 text-xs font-semibold hover:bg-gray-100 transition"
        >
          SEE FEATURES
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </a>
      </div>
    </section>
    <section className="w-full px-8 md:px-20 py-24 flex flex-col justify-center items-center relative overflow-hidden bg-gray-50">
  {/* Main Content Container with Gradient Background */}
  <div className="max-w-[95em] w-full">
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-black via-black to-blue-600 p-12 md:p-16">
      {/* Gradient Overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

      {/* Content Grid */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-12 text-white">
        {/* Left Content */}
        <div className="flex-1">
          <h5 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Custom websites,{" "}
            <span className="block">backed by strategy</span>
          </h5>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Request a Proposal
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 text-gray-200 space-y-6 text-sm md:text-base leading-relaxed">
          <p>
            A strong online presence is essential to ensure the success of any business as it
            impacts how your audience perceives your brand. In order to maximize growth, a
            business needs to clearly differentiate itself from the vast sea of competition. At
            Brand Vision, we specialize in designing websites that are not only visually stunning
            but also user-friendly, ensuring your brand makes an unforgettable impression.
          </p>
          <p>
            Our team of award-winning web designers and expert web developers is passionate about
            modern web design and deeply understands the psychology of user experience. This
            combination results in a perfect blend of aesthetic appeal and functional excellence,
            all designed to help you achieve your business objectives through your website.
          </p>
        </div>
      </div>

      {/* Bottom Section - Partners */}
      <div className="relative z-10 mt-16 pt-12 border-t border-white/20">
        <div className="text-center mb-12">
          <div className="text-xl md:text-2xl font-semibold text-white">
            Making the Growth effortless for Hundreds of Businesses
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section
      id="Who-we-are"
      className="w-full flex flex-col justify-center items-center px-8 md:px-20 py-24 relative overflow-hidden text-[#f0f5fa] bg-[#0c1013]"
      onMouseMove={handleMouseMove}
    >
      {/* Title */}
      <div className="max-w-[95em] w-full">
        <div className="mb-16 text-left">
          <h5 className="text-4xl md:text-6xl font-bold leading-tight">
            Websites That <span className="block">Push New Limits</span>
          </h5>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Section Caption - Left Column */}
          <div className="lg:col-span-1">
            <div className="text-sm font-medium bg-gray-800/50 px-3 py-2 rounded-lg tracking-wide text-gray-300 w-fit">
              Our Excellence
            </div>
          </div>

          {/* Content Items - Right 3 Columns */}
          <div className="lg:col-span-3 space-y-12">
            {items.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className=" grid grid-cols-1 md:grid-cols-2 border-b border-gray-700/50 pb-8">
                  <div className="text-2xl md:text-3xl font-semibold mb-4 leading-tight">
                    {item.title}{" "}
                    <span>{item.highlight}</span>
                  </div>
                  <p className="text-[#a6b9c9] leading-relaxed text-base max-w-4xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Image on Hover */}
      {hoveredItem && (
        <div
          className="fixed pointer-events-none z-50 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x + 20,
            top: mousePosition.y - 100,
            transform: 'translate(0, 0)',
          }}
        >
          <img
            src={items.find(item => item.id === hoveredItem)?.image}
            alt="Hover Preview"
            className="w-80 h-48 object-cover rounded-lg shadow-2xl opacity-90"
          />
        </div>
      )}

      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-900/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-900/10 to-transparent rounded-full blur-3xl"></div>
    </section>



    <div className="min-h-screen bg-gray-50">
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Our Services
              </h1>
              <p className="mt-4 text-gray-600 max-w-xl text-lg">
                Our team integrates strategy, <a href="https://www.brandvm.com/" className="text-blue-500 hover:text-blue-600 underline transition-colors">branding</a>, UX design, and technology to create award-winning websites.
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-8 md:mt-0">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
              >
                <span>Request a Proposal</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/services"
                className="inline-flex items-center space-x-2 px-6 py-3 text-gray-700 font-semibold hover:text-blue-500 transition-colors"
              >
                <span className="underline">All Services</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="col-span-1">
                <ServiceCard service={service} />
              </div>
            ))}
            <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {smallServices.map((service) => (
                <SmallServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  

    <FeaturedWork />

    <section className="w-full flex flex-col justify-center items-center px-8 md:px-20 py-48 relative overflow-hidden text-[#f0f5fa] bg-[#0c1013]">
      <div className="max-w-[95em] w-full">
        {/* Title Section */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Caption */}
          <div className="lg:col-span-1">
            <div className="text-sm font-medium bg-gray-800/50 px-3 py-2 rounded-lg tracking-wide text-gray-300 w-fit mb-6">
              Our Process
            </div>
          </div>
          
          {/* Main Title */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              A Closer Look At Our{" "}
              <span>Web Design Methodology</span>
            </h2>
          </div>
        </div>

        {/* Process Stages */}
        <div className="space-y-16">
          {processStages.map((stage) => (
            <div key={stage.id} className="group">
              {/* Stage Header */}
              <div className="mb-8 grid grid-cols-1 md:grid-cols-3">
                <div className="text-sm text-gray-400 mb-4">{stage.stage}</div>
                
                <div className="flex flex-col col-span-2 ">
                  {/* Stage Title with Glow Indicator */}
                  <div className="grid  grid-cols-1 md:grid-cols-2">
                    <div className="flex  gap-4">
                    <div className="relative">
                      <div className={`w-2 h-10 ${getGlowClasses(stage.glowColor)}`}></div>
                      <div className={`absolute inset-0 w-3 h-3 rounded-full ${getGlowClasses(stage.glowColor)} blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold">{stage.title}</h3>
                    </div>

                  {/* Stage Description */}
                  <p className="text-[#a6b9c9] leading-relaxed max-w-4xl">
                    {stage.description}
                  </p>
                  </div>
                  {/* Separator */}
                  <div className="h-px bg-white/10 mt-4 mb-8"></div>

                  {/* Steps Container */}
              <div className="space-y-4">
                {stage.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="border border-gray-800/50 rounded-lg overflow-hidden bg-gray-900/20">
                    {/* Dropdown Toggle */}
                    <button
                      onClick={() => toggleDropdown(`${stage.id}-${stepIndex}`)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/30 transition-colors duration-200"
                    >
                      <span className="font-medium text-white">
                        {step.title.includes('strong') ? (
                          <strong>{step.title.replace(/<\/?strong>/g, '')}</strong>
                        ) : (
                          step.title
                        )}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdowns[`${stage.id}-${stepIndex}`] ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Content */}
                    {openDropdowns[`${stage.id}-${stepIndex}`] && (
                      <div className="px-6 pb-4">
                        <ul className="space-y-2 text-sm text-gray-300">
                          {step.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2">
                              <span className="text-blue-400 mt-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

                </div>
              </div>

              

              
            </div>
          ))}
        </div>
      </div>
    </section>
    <RecentClients />
    <IndustriesSection />
    <FaqsSection />
    <Insights />
    <TestimonialsSection />
    <ContactFormFormspree />
    <FooterIntro />
    </>
    );
}

export default WebDesign;