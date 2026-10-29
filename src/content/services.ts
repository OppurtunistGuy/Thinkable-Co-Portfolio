import type { ServiceKey } from "@/config/site";

export type ServiceContent = {
  key: ServiceKey;
  label: string;
  short: string;
  seoTitle: string;
  description: string;
  h1: string;
  sub: string;
  time: string;
  /** CSS aspect-ratio for example frames, matching the real format of the work. */
  ratio: string;
  minCol: number;
  samples: { frame: string; caption: string }[];
  gets: { title: string; text: string }[];
  formatsTitle: string;
  formats: string[];
  faqs: { q: string; a: string }[];
};

export const serviceContent: Record<ServiceKey, ServiceContent> = {
  "landing-pages": {
    key: "landing-pages",
    label: "Landing pages",
    short: "landing page",
    seoTitle: "Landing Page and Website Design",
    description: "Fast, mobile-first landing pages and websites built around your business, with one clear action. Based in Pune, working across India and abroad.",
    h1: "Landing pages built to bring in enquiries.",
    sub: "Fast on mobile, clear about what you sell, and one tap away from WhatsApp or a call. Designed around your business, not a template.",
    time: "5 to 7 working days",
    ratio: "16 / 10",
    minCol: 300,
    samples: [
      { frame: "[SAMPLE: LOCAL BUSINESS PAGE]", caption: "Local business · orders over WhatsApp" },
      { frame: "[SAMPLE: STARTUP PAGE]", caption: "Startup · books demo calls" },
      { frame: "[SAMPLE: SERVICE BUSINESS PAGE]", caption: "Service business · calls and enquiries" },
    ],
    gets: [
      { title: "Made for your business", text: "Look and words matched to what you sell and who buys it." },
      { title: "Fast on mobile", text: "Loads quickly on a phone, where most customers find you." },
      { title: "One clear action", text: "WhatsApp, call, book or buy. No hunting for the button." },
      { title: "Found on Google", text: "Set up for search and Google Business from day one." },
    ],
    formatsTitle: "What we build",
    formats: ["Single landing page", "Multi-page website", "Redesign of an existing site", "Hosting and domain setup"],
    faqs: [
      { q: "How long does a landing page take?", a: "Usually 5 to 7 working days once we have your brief, text and photos." },
      { q: "Will it work well on mobile?", a: "Yes. Every page is designed for phones first, then checked on larger screens." },
      { q: "Can you redesign my existing website?", a: "Yes. Share your current site and we will suggest what to keep and what to change." },
      { q: "Do you handle hosting and the domain?", a: "We can set up hosting and connect your domain, so the page goes live without extra work for you." },
    ],
  },
  "motion-ads": {
    key: "motion-ads",
    label: "Motion ads",
    short: "motion ad",
    seoTitle: "Motion Graphic Ads for Instagram and YouTube",
    description: "Short animated ads for Reels, Shorts and feeds, built to stop the scroll. Script help and every size included.",
    h1: "Motion ads that explain your business in seconds.",
    sub: "Short animated ads for Reels, Shorts and feeds. Built to stop the scroll and get your message across before people swipe.",
    time: "3 to 5 days",
    ratio: "9 / 16",
    minCol: 200,
    samples: [
      { frame: "[REEL: PRODUCT LAUNCH]", caption: "Product launch · 15 seconds" },
      { frame: "[REEL: LOCAL OFFER]", caption: "Local offer · 20 seconds" },
      { frame: "[REEL: SERVICE EXPLAINER]", caption: "Explainer · 30 seconds" },
      { frame: "[REEL: BRAND STORY]", caption: "Brand story · 30 seconds" },
    ],
    gets: [
      { title: "Hook in the first second", text: "Opening built to stop the scroll." },
      { title: "Script and storyboard", text: "We help shape the message before animating." },
      { title: "Every size you need", text: "Vertical, square and wide versions from one ad." },
      { title: "Ready to run", text: "Files exported for Instagram, YouTube and Meta Ads." },
    ],
    formatsTitle: "Formats",
    formats: ["Reels 9:16", "Shorts 9:16", "Story 9:16", "Feed 1:1 and 4:5", "YouTube 16:9"],
    faqs: [
      { q: "How long is a typical motion ad?", a: "Most are 15 to 30 seconds. Short ads keep attention better." },
      { q: "Which formats and sizes do you deliver?", a: "Vertical for Reels, Shorts and Stories, square or 4:5 for feeds, and 16:9 for YouTube." },
      { q: "Do you write the script?", a: "Yes, if you want. We can also work from your own script or idea." },
      { q: "How many revisions are included?", a: "[REVISIONS INCLUDED]. Tell us early if you expect more." },
    ],
  },
  "ad-creatives": {
    key: "ad-creatives",
    label: "Ad creatives",
    short: "ad creatives",
    seoTitle: "Ad Creatives for Meta and Google Ads",
    description: "Static ad creatives for Instagram, Facebook, Google and LinkedIn, with variations to test what works.",
    h1: "Ad creatives made to be clicked.",
    sub: "Static ads for Meta and Google, with a few versions so you can test what works best.",
    time: "1 to 2 days",
    ratio: "1 / 1",
    minCol: 220,
    samples: [
      { frame: "[AD: OFFER]", caption: "Offer ad · feed 1:1" },
      { frame: "[AD: PRODUCT]", caption: "Product ad · feed 4:5" },
      { frame: "[AD: TESTIMONIAL]", caption: "Social proof · feed 1:1" },
      { frame: "[AD: EVENT]", caption: "Event ad · story 9:16" },
    ],
    gets: [
      { title: "Versions to test", text: "Several headlines and layouts per ad." },
      { title: "Platform sizes", text: "Feed, story and display sizes ready to upload." },
      { title: "On brand", text: "Your colours, fonts and logo used correctly." },
      { title: "Clear call to action", text: "Every ad tells people exactly what to do next." },
    ],
    formatsTitle: "Platforms",
    formats: ["Instagram and Facebook", "Google Display", "LinkedIn", "WhatsApp status"],
    faqs: [
      { q: "Do you make several versions to test?", a: "Yes. Each ad comes with a few variations so you can see which performs best." },
      { q: "Which platforms do you design for?", a: "Instagram, Facebook, Google Display and LinkedIn, plus WhatsApp status images." },
      { q: "Can you follow my brand guidelines?", a: "Yes. Share your logo, colours and fonts, and we will stick to them." },
    ],
  },
  carousels: {
    key: "carousels",
    label: "Carousels",
    short: "carousel",
    seoTitle: "Instagram and LinkedIn Carousel Design",
    description: "Instagram and LinkedIn carousels that teach, sell or announce, one clear slide at a time. Slide text included.",
    h1: "Carousels people swipe to the end.",
    sub: "Instagram and LinkedIn carousels that teach, sell or announce, one clear slide at a time.",
    time: "1 to 2 days",
    ratio: "4 / 5",
    minCol: 200,
    samples: [
      { frame: "[CAROUSEL: TIPS]", caption: "Tips carousel · 7 slides" },
      { frame: "[CAROUSEL: PRODUCT]", caption: "Product carousel · 5 slides" },
      { frame: "[CAROUSEL: LAUNCH]", caption: "Launch carousel · 6 slides" },
      { frame: "[CAROUSEL: CASE STUDY]", caption: "Case study · 8 slides" },
    ],
    gets: [
      { title: "Strong first slide", text: "A cover that makes people want to swipe." },
      { title: "Slide text written", text: "We can write the words or polish yours." },
      { title: "Consistent look", text: "Every slide matches, so your feed looks planned." },
      { title: "Monthly sets", text: "Regular carousels on a schedule if you need them." },
    ],
    formatsTitle: "Use cases",
    formats: ["Tips and how-tos", "Product features", "Launches and offers", "Case studies"],
    faqs: [
      { q: "How many slides is a carousel?", a: "Usually 5 to 10. We pick the length that fits the story." },
      { q: "Do you write the slide text?", a: "Yes, if you want. Or send your points and we will shape them." },
      { q: "Can you make a monthly set?", a: "Yes. Tell us how many per month and we will plan them together." },
    ],
  },
  "graphic-design": {
    key: "graphic-design",
    label: "Graphic design",
    short: "design",
    seoTitle: "Graphic Design for Brands and Businesses",
    description: "Posters, menus, social posts, business cards and brand basics for businesses in Pune and across India. Urgent work welcome.",
    h1: "Design that makes your business look the part.",
    sub: "Posters, menus, social posts and brand basics. Urgent work welcome.",
    time: "1 to 2 days",
    ratio: "3 / 4",
    minCol: 220,
    samples: [
      { frame: "[POSTER]", caption: "Event poster" },
      { frame: "[MENU]", caption: "Restaurant menu" },
      { frame: "[SOCIAL POST]", caption: "Festival social post" },
      { frame: "[BRAND KIT]", caption: "Brand basics" },
    ],
    gets: [
      { title: "Print and digital", text: "Files ready for printing and for posting online." },
      { title: "Urgent work", text: "Small jobs in 24 to 48 hours when you need them." },
      { title: "Editable files", text: "Source files so changes are easy later." },
      { title: "Festive and seasonal", text: "Posts and posters for festivals and offers." },
    ],
    formatsTitle: "What we design",
    formats: ["Posters and flyers", "Menus", "Social posts", "Business cards", "Brand basics"],
    faqs: [
      { q: "Can you handle urgent work?", a: "Yes. Small jobs can be done in 24 to 48 hours. Say so in your enquiry." },
      { q: "What files will I receive?", a: "Print-ready PDF, PNG or JPG for posting, and the editable source file." },
      { q: "Do you design logos?", a: "Yes, as part of brand basics. Ask for details in your enquiry." },
    ],
  },
};

export const steps = [
  { title: "1. Brief", text: "Tell us your goal on WhatsApp, email or a quick call." },
  { title: "2. Draft", text: "You get a first version to react to." },
  { title: "3. Deliver", text: "Final files or a live page, ready to use." },
];
