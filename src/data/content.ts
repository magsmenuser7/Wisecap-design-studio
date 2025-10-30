import { Project, Service, Package, TeamMember, BlogPost, Job } from '../types/cms';
import featuredimage1 from '../assets/images/logo/ragainfra/Button-Badge-Mockup1.jpg'
import featuredimage2 from '../assets/images/logo/indilocal/indilocal-logo-two.jpg'
import featuredimage3 from '../assets/images/logo/works/image1.jpg'
import featuredimage4 from '../assets/images/logo/works/image2.jpg'
import featuredimage5 from '../assets/images/logo/works/image3.jpg'
import featuredimage6 from '../assets/images/logo/works/image4.jpg'
import featuredimage7 from '../assets/images/logo/works/image5.jpg'
import featuredimage8 from '../assets/images/logo/works/image6.jpg'
import featuredimage9 from '../assets/images/logo/works/image7.jpg'
import featuredimage10 from '../assets/images/logo/works/image8.png'
import featuredimage11 from '../assets/images/logo/works/image9.png'
import featuredimage12 from '../assets/images/logo/works/image10.jpg'
import servicebrandkitsdesign from "../assets/images/logo/servicces/service-brand-kits-design.png";
import featuredimage13 from '../assets/images/logo/works/17.png'
import featuredimage14 from '../assets/images/logo/works/22.png'
import featuredimage15 from '../assets/images/logo/works/27.png'
import featuredimage16 from '../assets/images/logo/works/28.png'
import featuredimage17 from '../assets/images/logo/works/29.png'
import featuredimage18 from '../assets/images/logo/works/30.png'
import featuredimage19 from '../assets/images/logo/works/31.png'
import featuredimage20 from '../assets/images/logo/works/32.png'
import featuredimage21 from '../assets/images/logo/works/34.png'
import featuredimage22 from '../assets/images/logo/works/35.png'
import featuredimage23 from '../assets/images/logo/works/LUN-9.jpg'
import featuredimage24 from '../assets/images/logo/works/3.jpg'
import featuredimage25 from '../assets/images/logo/banners/harmony-banner.jpeg'
















export const projects: Project[] = [
  {
    id: '1',
    title: 'Chakrasiddh',
    slug: 'Chakrasiddh',
    heroImage: featuredimage3,
    clientName: 'Chakrasiddh',
    industry: 'Food & Beverage',
    year: 2024,
    services: [],
    shortBlurb: 'A premium coffee brand rooted in Indian heritage, crafted for modern palates.',
    problemStatement: 'Ritual Coffee was invisible in the premium segment. Their story of single-origin sourcing and artisanal roasting wasn\'t reaching discerning coffee drinkers.',
    storyboard: [
      {
        id: '1',
        image: featuredimage1,
        caption: 'Discovery: Understanding the ritual of coffee in Indian homes',
        order: 1
      },
      {
        id: '2',
        image: featuredimage2,
        caption: 'Strategy: Heritage meets modernity through careful craft',
        order: 2
      }
    ],
    solution: 'We created a visual identity that honors traditional coffee culture while appealing to contemporary aesthetics. Hand-drawn illustrations merge with clean typography.',
    gallery: [
      'https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Shelf Sales', value: '+28%', description: 'increase in premium segment' },
      { metric: 'Brand Recall', value: '3.2x', description: 'higher unaided awareness' }
    ],
    testimonial: {
      quote: 'Wisecap transformed our story into something customers could feel and taste.',
      author: 'Priya Sharma',
      role: 'Founder',
      company: 'Ritual Coffee'
    },
    seoTitle: 'Ritual Coffee Brand Identity - Wisecap Design Studio',
    seoDescription: 'How we helped Ritual Coffee increase shelf sales by 28% through heritage-driven brand design.',
    ogImage: 'https://images.pexels.com/photos/4226876/pexels-photo-4226876.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '2',
    title: 'Indilocal',
    slug: 'Indilocal',
    heroImage: featuredimage2,
    clientName: 'Indilocal',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '3',
    title: 'Raaga Infra',
    slug: 'Raaga Infra',
    heroImage: featuredimage1,
    clientName: 'Raaga Infra',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '4',
    title: 'Bubble Fresh Laundromart',
    slug: 'Bubble Fresh Laundromart',
    heroImage: featuredimage4,
    clientName: 'Bubble Fresh Laundromart',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },

  {
    id: '5',
    title: 'DESU Masale',
    slug: 'DESU Masale',
    heroImage: featuredimage5,
    clientName: 'DESU Masale',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },

  {
    id: '6',
    title: 'Gamanam',
    slug: 'Gamanam',
    heroImage: featuredimage6,
    clientName: 'Gamanam',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },

  {
    id: '7',
    title: 'Hoverse',
    slug: 'Hoverse',
    heroImage: featuredimage8,
    clientName: 'Hoverse',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '8',
    title: 'Jivamman',
    slug: 'Jivamman',
    heroImage: featuredimage9,
    clientName: 'Jivamman',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '9',
    title: 'Crafting Design',
    slug: 'Crafting Design',
    heroImage: featuredimage12,
    clientName: 'Crafting Design',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '10',
    title: 'Sadananda Yoga Asram Trust',
    slug: 'sadananda-yoga',
    heroImage: servicebrandkitsdesign,
    clientName: 'Sadananda Yoga Asram Trust',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '11',
    title: 'MR Constructions',
    slug: 'mr-constructions',
    heroImage: featuredimage13,
    clientName: 'MR Constructions',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '12',
    title: 'Ugadi Foods',
    slug: 'ugadi-foods',
    heroImage: featuredimage14,
    clientName: 'Ugadi Foods',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '13',
    title: 'Rotary',
    slug: 'rotary',
    heroImage: featuredimage15,
    clientName: 'Rotary',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '14',
    title: 'My Buddy',
    slug: 'my-buddy',
    heroImage: featuredimage16,
    clientName: 'My Buddy',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '15',
    title: 'Origin',
    slug: 'origin',
    heroImage: featuredimage17,
    clientName: 'Origin',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '16',
    title: 'Siddartha Quest',
    slug: 'siddartha-quest',
    heroImage: featuredimage18,
    clientName: 'Siddartha Quest',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
  {
    id: '17',
    title: 'Pronted',
    slug: 'Pronted',
    heroImage: featuredimage19,
    clientName: 'Pronted',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
    {
    id: '18',
    title: 'Master Minds',
    slug: 'master-minds',
    heroImage: featuredimage20,
    clientName: 'Master Minds',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
      {
    id: '19',
    title: 'CREDAI',
    slug: 'credai',
    heroImage: featuredimage21,
    clientName: 'CREDAI',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
        {
    id: '20',
    title: 'Snakes Ladders',
    slug: 'snakes-ladders',
    heroImage: featuredimage22,
    clientName: 'Snakes Ladders',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
          {
    id: '21',
    title: 'Love Your God',
    slug: 'love-your-god',
    heroImage: featuredimage23,
    clientName: 'Love Your God',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
            {
    id: '22',
    title: 'Stone Henge',
    slug: 'stone-henge',
    heroImage: featuredimage24,
    clientName: 'Stone Henge',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
              {
    id: '23',
    title: 'Harmony',
    slug: 'Harmoney',
    heroImage: featuredimage25,
    clientName: 'Harmoney',
    industry: 'Health & Wellness',
    year: 2024,
    services: [],
    shortBlurb: 'Modern Ayurvedic wellness products with authentic, trust-building packaging.',
    problemStatement: 'Pure Elements struggled to convey authenticity in a crowded wellness market filled with flashy, superficial branding.',
    storyboard: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=800',
        caption: 'Research: Ancient wisdom meets modern science',
        order: 1
      }
    ],
    solution: 'Clean, minimal packaging that lets the product quality speak. Earthy tones and botanical illustrations build immediate trust.',
    gallery: [
      'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    outcomes: [
      { metric: 'Trust Score', value: '+45%', description: 'in consumer research' },
      { metric: 'Retail Adoption', value: '2x', description: 'faster placement' }
    ],
    seoTitle: 'Ayurvedic Wellness Packaging Design - Wisecap Design Studio',
    seoDescription: 'Authentic packaging design that increased trust scores by 45% for wellness brand.',
    ogImage: 'https://images.pexels.com/photos/7979267/pexels-photo-7979267.jpeg?auto=compress&cs=tinysrgb&w=1200'
  },
   
   
];


export const services: Service[] = [
  {
    id: '1',
    name: 'Logo Design',
    slug: 'signature-logos',
    tagline: 'Your logo is the face of your brand make it count. We design timeless, distinctive logos that stand out. Crafted to reflect your unique identity and vision. Built for startups and established brands alike.',
    shortDescription: 'Your logo is the face of your brand make it count. We design timeless, distinctive logos that stand out. Crafted to reflect your unique identity and vision. Built for startups and established brands alike.',
    longDescription: 'Crafted to reflect your unique identity and vision. Built for startups and established brands alike.',
    deliverables: [
      'Strategic logo concepts',
      'Scalable brand marks',
      'Vector files (AI, EPS, SVG)',
      'High-resolution formats',
      'Usage guidelines'
    ],
    industries: ['Technology', 'Consumer Goods', 'Healthcare', 'Finance'],
    sampleProjects: ['ritual-coffee-heritage'],
    pricingAnchor: '/contact'
  },
  {
    id: '2',
    name: 'Brand Kits Design',
    slug: 'brand-kits-design',
    tagline: 'A brand without consistency loses trust.',
    shortDescription: 'Consistency builds trust your brand should reflect that. Our Brand Kits include logos, colors, fonts, and assets. We ensure a cohesive look across every platform. Build a visual identity that connects with your audience.',
    longDescription: 'A brand without consistency loses trust. We build complete visual identities with colors, typography, and systems that make your brand instantly recognizable. This is not design for today, it is equity for tomorrow.',
    deliverables: [
      'Visual identity system',
      'Color palette development',
      'Typography selection',
      'Brand guidelines',
      'Application templates'
    ],
    industries: ['Corporate', 'Professional Services', 'Healthcare', 'Finance'],
    sampleProjects: ['ayurveda-wellness-packaging'],
    pricingAnchor: '/contact'
  },
  {
    id: '3',
    name: 'Brochure Design',
    slug: 'brochure-design',
    tagline: 'On the shelf, you have three seconds to win attention.',
    shortDescription: 'We create everything from company profiles to catalogs. Clean, engaging designs that tell your story clearly. Tailored to inform, inspire, and impress your audience. Perfect for marketing, events, and client presentationsWe create everything from company profiles to catalogs. Clean, engaging designs that tell your story clearly. Tailored to inform, inspire, and impress your audience. Perfect for marketing, events, and client presentations.',
    longDescription: 'On the shelf, you have three seconds to win attention. Packaging is not wrapping, it is strategy. We design packs that sell faster, feel premium, and carry meaning long after purchase.',
    deliverables: [
      'Packaging concept development',
      'Structural design guidance',
      'Print-ready files',
      'Material specifications',
      'Production support'
    ],
    industries: ['FMCG', 'Food & Beverage', 'Beauty', 'Consumer Goods'],
    sampleProjects: [],
    pricingAnchor: '/contact'
  },
  {
    id: '4',
    name: 'Package Design',
    slug: 'package-design',
    tagline: 'Every card, every letter, every envelope carries weight.',
    shortDescription: 'Your product deserves packaging that stands out. We blend creativity and strategy for maximum impact. Our designs attract attention and drive connection. Packaging that reflects your brand’s values and personality.',
    longDescription: 'Every card, every letter, every envelope carries weight. These are not small expenses, they are subtle investments in authority. We design stationery that reinforces credibility in every interaction.',
    deliverables: [
      'Business card design',
      'Letterhead system',
      'Envelope suite',
      'Compliment slips',
      'Digital templates'
    ],
    industries: ['Corporate', 'Professional Services', 'Law', 'Consulting'],
    sampleProjects: [],
    pricingAnchor: '/contact'
  },
  {
    id: '5',
    name: 'Flyer & Poster Designs',
    slug: 'flyer-poster-designs',
    tagline: 'Information deserves more than pages.',
    shortDescription: "Catch eyes and make an impact with designs that speak for you. Whether it's a flyer for an event, a poster for a campaign, or a promotion that needs attention we create bold, beautiful visuals that communicate.",
    longDescription: 'Information deserves more than pages. Our brochures and catalogs are designed as experiences, guiding attention and building trust. Each page is a chapter in your brand\'s story, carefully crafted to influence perception.',
    deliverables: [
      'Editorial layout design',
      'Information hierarchy',
      'Custom photography direction',
      'Print production management',
      'Digital adaptations'
    ],
    industries: ['Real Estate', 'Healthcare', 'Education', 'B2B Services'],
    sampleProjects: [],
    pricingAnchor: '/contact'
  },
  {
    id: '6',
    name: 'Wedding branding',
    slug: 'wedding-branding',
    tagline: 'Billboards and outdoor displays are investments in visibility.',
    shortDescription: 'We craft elegant, custom wedding branding with heart. From invites to signage, every detail is thoughtfully designed. Our cohesive visuals reflect your unique love story. Create a memorable, immersive experience.',
    longDescription: 'Billboards, hoardings, and outdoor displays are investments in visibility. We create designs that stop people mid-thought, turning passing glances into lasting recognition.',
    deliverables: [
      'Large-format concepts',
      'Distance-optimized typography',
      'Print-ready files',
      'Installation specifications',
      'Environmental considerations'
    ],
    industries: ['Retail', 'Real Estate', 'Automotive', 'Entertainment'],
    sampleProjects: [],
    pricingAnchor: '/contact'
  },
  {
    id: '7',
    name: 'Brand Collateral',
    slug: 'brand-collateral',
    tagline: 'Flyers, invites, and kits may look small, but together they shape memory.',
    shortDescription: 'We design collaterals as precision tools that keep your brand consistent, strong, and respected.',
    longDescription: 'Flyers, invites, and kits may look small, but together they shape memory. We design collaterals as precision tools that keep your brand consistent, strong, and respected in every detail.',
    deliverables: [
      'Flyer designs',
      'Invitation suites',
      'Brand kits',
      'Presentation templates',
      'Marketing materials'
    ],
    industries: ['Events', 'Corporate', 'Non-profit', 'Education'],
    sampleProjects: [],
    pricingAnchor: '/contact'
  },
  {
    id: '8',
    name: 'Campaign Visuals',
    slug: 'campaign-visuals',
    tagline: 'Campaigns are not moments, they are milestones.',
    shortDescription: 'Posters and creatives we design are built to perform — sharp, persuasive, and tailored to convert.',
    longDescription: 'Campaigns are not moments, they are milestones. Posters and creatives we design are built to perform — sharp, persuasive, and tailored to convert attention into action.',
    deliverables: [
      'Campaign concept development',
      'Poster designs',
      'Visual storytelling',
      'Multi-format adaptations',
      'Performance optimization'
    ],
    industries: ['Marketing', 'Politics', 'Non-profit', 'Entertainment'],
    sampleProjects: [],
    pricingAnchor: '/contact'
  },
  {
    id: '9',
    name: 'Launch Assets',
    slug: 'launch-assets',
    tagline: 'A launch is a once-only chance.',
    shortDescription: 'We design pre-launch and launch materials that build anticipation, create urgency.',
    longDescription: 'A launch is a once-only chance. We design pre-launch and launch materials that build anticipation, create urgency, and position your brand as the one to watch.',
    deliverables: [
      'Teaser campaigns',
      'Launch announcements',
      'Press materials',
      'Social media assets',
      'Event collaterals'
    ],
    industries: ['Technology', 'Consumer Products', 'Startups', 'Fashion'],
    sampleProjects: [],
    pricingAnchor: '/contact'
  },
  {
    id: '10',
    name: 'Event Systems',
    slug: 'event-systems',
    tagline: 'Conferences and events are platforms where brands are judged.',
    shortDescription: 'We craft cohesive design systems that make your presence premium and unforgettable.',
    longDescription: 'Conferences and events are platforms where brands are judged. From stage backdrops to participant kits, we craft cohesive design systems that make your presence premium and unforgettable.',
    deliverables: [
      'Event identity system',
      'Stage and backdrop design',
      'Signage and wayfinding',
      'Participant materials',
      'Digital presentations'
    ],
    industries: ['Corporate', 'Education', 'Healthcare', 'Technology'],
    sampleProjects: [],
    pricingAnchor: '/contact'
  },
  {
    id: '11',
    name: 'Digital Creatives',
    slug: 'digital-creatives',
    tagline: 'Online, perception shifts in seconds.',
    shortDescription: 'Each piece is crafted to amplify visibility, build credibility, and drive engagement.',
    longDescription: 'Online, perception shifts in seconds. Social media visuals and digital campaigns we design are not content fillers, they are performance assets. Each piece is crafted to amplify visibility, build credibility, and drive engagement.',
    deliverables: [
      'Social media templates',
      'Digital campaign assets',
      'Web graphics',
      'Email designs',
      'Performance tracking'
    ],
    industries: ['Technology', 'E-commerce', 'Digital Marketing', 'SaaS'],
    sampleProjects: [],
    pricingAnchor: '/contact'
  },
  {
    id: '12',
    name: 'Complete Brand Creation',
    slug: 'complete-brand-creation',
    tagline: 'Some brands need more than design, they need foundation.',
    shortDescription: 'We build entire ecosystems: from logo to identity, packaging to digital presence.',
    longDescription: 'Some brands need more than design, they need foundation. We build entire ecosystems: from logo to identity, packaging to digital presence, ensuring your brand enters the world with clarity and confidence.',
    deliverables: [
      'Complete brand strategy',
      'Visual identity system',
      'Packaging design',
      'Digital presence',
      'Launch materials'
    ],
    industries: ['Startups', 'New Ventures', 'Rebranding Projects'],
    sampleProjects: ['ritual-coffee-heritage'],
    pricingAnchor: '/contact'
  },
  {
    id: '13',
    name: 'Annual Design Partnerships',
    slug: 'annual-design-partnerships',
    tagline: 'Design is not a cost to renew, it is a partnership to grow.',
    shortDescription: 'You gain the consistency of an in-house team with the quality of a premium studio.',
    longDescription: 'Design is not a cost to renew, it is a partnership to grow. Our annual contracts give you dedicated design support across Small, Medium, Large, and Custom plans. You gain the consistency of an in-house team with the quality of a premium studio.',
    deliverables: [
      'Monthly design allocation',
      'Priority turnaround',
      'Dedicated account manager',
      'Strategic planning sessions',
      'Performance reviews'
    ],
    industries: ['Growing Businesses', 'Corporate', 'E-commerce', 'B2B Services'],
    sampleProjects: [],
    pricingAnchor: '/contact'
  }
];

export const packages: Package[] = [];

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Sandeep N',
    role: 'Founder & Creative Director',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: 'https://www.linkedin.com/in/itsnsandeep?trk=public-profile-badge-profile-badge-view-profile-cta&originalSubdomain=in',
    bioBrief: 'Former brand lead at Ogilvy. Believes design should make business clearer.',
    responsibilityTags: ['Strategy', 'Creative Direction', 'Client Relations']
  },
  {
    id: '2',
    name: 'Vinod Mehta',
    role: 'Design Lead',
    photo: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: 'https://linkedin.com/in/vinod',
    bioBrief: 'Craft-obsessed designer with 8 years in packaging and identity.',
    responsibilityTags: ['Visual Design', 'Packaging', 'Production']
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How Design Changes Retail Conversions',
    slug: 'design-retail-conversions',
    author: team[0],
    heroImage: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1200',
    summary: 'Small design changes can drive significant improvements in retail performance. Here\'s what we\'ve learned from 50+ projects.',
    body: 'In retail environments, design is your silent salesperson. Every color choice, typography decision, and layout element influences buying behavior...',
    tags: ['Retail Design', 'Conversion Optimization', 'Consumer Psychology'],
    relatedProjects: ['ritual-coffee-heritage'],
    publishedAt: '2024-01-15',
    seoTitle: 'How Design Changes Retail Conversions - Wisecap Insights',
    seoDescription: 'Discover how small design changes drive big improvements in retail conversion rates.'
  }
];

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Visual Designer',
    location: 'Guntur, Andhra Pradesh, India',
    type: 'Full-time',
    responsibilities: [
      'Craft campaign visuals, digital assets, posters, and collaterals that speak with clarity',
      'Collaborate with clients on creative direction',
      'Ensure quality standards across all deliverables',
      'Support brand consistency across touchpoints'
    ],
    skillsRequired: [
      'Strong aesthetics and storytelling ability',
      'Proficiency in Adobe Creative Suite & Figma',
      '1–3 years experience preferred',
      'Portfolio showing campaign and visual work'
    ],
    portfolioRequirements: [
      'Campaign visual samples',
      'Digital and print design work',
      'Process documentation showing creative thinking'
    ],
    applyForm: '/careers/apply'
  },
  {
    id: '2',
    title: 'Brand Designer',
    location: 'Guntur, Andhra Pradesh, India',
    type: 'Full-time',
    responsibilities: [
      'Shape entire identities: logos, systems, and packaging that anchor how brands are seen',
      'Develop comprehensive brand guidelines',
      'Work on packaging and identity projects',
      'Ensure quality standards across all deliverables'
    ],
    skillsRequired: [
      'Expertise in typography and visual identity',
      'Knowledge of packaging and guidelines',
      '2–4 years experience preferred',
      'Strong portfolio in brand identity'
    ],
    portfolioRequirements: [
      'Brand identity case studies',
      'Packaging or print design samples',
      'Process documentation showing strategic thinking'
    ],
    applyForm: '/careers/apply'
  },
  {
    id: '3',
    title: 'Illustrator / Digital Artist',
    location: 'Guntur, Andhra Pradesh, India',
    type: 'Full-time',
    responsibilities: [
      'Bring uniqueness to brands through custom artwork and illustration',
      'Create bespoke visual elements for brand systems',
      'Adapt illustration style across different industries',
      'Support brand storytelling through visual narratives'
    ],
    skillsRequired: [
      'Versatile drawing and digital illustration skills',
      'Ability to adapt across industries',
      'Portfolio that shows originality',
      'Proficiency in illustration software'
    ],
    portfolioRequirements: [
      'Original illustration work',
      'Brand illustration samples',
      'Diverse style demonstrations'
    ],
    applyForm: '/careers/apply'
  },
  {
    id: '4',
    title: 'Junior Graphic Designer',
    location: 'Guntur, Andhra Pradesh, India',
    type: 'Full-time',
    responsibilities: [
      'Support in executions across collaterals, campaigns, and digital',
      'Assist senior designers on major projects',
      'Handle day-to-day design tasks',
      'Learn and grow within the studio culture'
    ],
    skillsRequired: [
      'Strong portfolio even if fresher',
      'Eagerness to learn, discipline to deliver',
      'Basic proficiency in design software',
      'Attention to detail and craft'
    ],
    portfolioRequirements: [
      'Student or personal project work',
      'Demonstration of design fundamentals',
      'Creative process documentation'
    ],
    applyForm: '/careers/apply'
  }
];