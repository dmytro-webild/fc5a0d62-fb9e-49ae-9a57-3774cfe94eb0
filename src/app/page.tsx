"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { CheckCircle, Shield, Award, Sprout, Flower2, Droplets, Wind, Leaf, Sparkles, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="largeSmallSizeLargeTitles"
      background="aurora"
      cardStyle="gradient-bordered"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Luminose"
          navItems={[
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Features", id: "features" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Shop Now",            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="luminose"
          description="Elevate your skincare ritual with our clinically-formulated, plant-based collection. Experience the transformative power of nature's most potent ingredients, crafted for radiant, healthy skin."
          buttons={[
            { text: "Explore Collection", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          background={{ variant: "sparkles-gradient" }}
          imageSrc="http://img.b2bpic.net/free-photo/top-view-tropical-leaves-vibrant-background-summer-flat-lay-composition_1182-2695.jpg"
          imageAlt="Luminose skincare product collection"
          frameStyle="card"
          mediaAnimation="slide-up"
          buttonAnimation="opacity"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Pure science meets" },
            { type: "image", src: "http://img.b2bpic.net/free-vector/vintage-real-estate-logo-template_23-2149609764.jpg", alt: "Luminose brand mark" },
            { type: "text", content: "botanical wellness" }
          ]}
          useInvertedBackground={false}
          buttons={[
            { text: "Our Story", href: "#" },
            { text: "Certifications", href: "#" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Our Signature Collection"
          description="Discover our award-winning skincare essentials, formulated to nourish, protect, and transform your complexion. Each product is crafted with premium botanical extracts and advanced skincare science."
          tag="Best Sellers"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",              name: "Radiant Serum",              price: "$68",              imageSrc: "http://img.b2bpic.net/free-photo/skincare-products-stones_23-2152010135.jpg",              imageAlt: "Radiant Serum bottle"
            },
            {
              id: "2",              name: "Renewal Moisturizer",              price: "$54",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-hand-holding-face-cream-container_23-2148213310.jpg",              imageAlt: "Renewal Moisturizer jar"
            },
            {
              id: "3",              name: "Night Recovery Mask",              price: "$62",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-facial-clay-mask_1098-2297.jpg",              imageAlt: "Night Recovery Mask"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureBento
          title="Why Choose Luminose"
          description="Our commitment to excellence is reflected in every product. We combine cutting-edge skincare research with time-tested botanical wisdom to deliver results you can see and feel."
          tag="Innovation"
          animationType="blur-reveal"
          textboxLayout="split"
          useInvertedBackground={false}
          features={[
            {
              title: "Clinically Tested",              description: "Proven efficacy through rigorous dermatological studies",              bentoComponent: "icon-info-cards",              items: [
                { icon: CheckCircle, label: "Dermatologist Approved", value: "100%" },
                { icon: Shield, label: "Safety Certified", value: "All Tests" },
                { icon: Award, label: "Industry Awards", value: "15+" }
              ]
            },
            {
              title: "Natural Ingredients",              description: "Sourced from sustainable, organic suppliers worldwide",              bentoComponent: "orbiting-icons",              centerIcon: Leaf,
              items: [
                { icon: Sprout, ring: 1 },
                { icon: Flower2, ring: 1 },
                { icon: Droplets, ring: 2 },
                { icon: Wind, ring: 2 }
              ]
            },
            {
              title: "Results You Can Trust",              description: "Real customer transformations and measurable improvements",              bentoComponent: "animated-bar-chart"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Luminose has completely transformed my skincare routine. My skin feels more hydrated, looks visibly brighter, and the results appeared in just two weeks. I'm absolutely obsessed and recommend it to everyone."
          rating={5}
          author="Sophie Chen, Beauty Influencer"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/positive-confident-businesswoman-wearing-formal-suit-standing-with-arms-folded_74855-10328.jpg", alt: "Customer avatar 1" },
            { src: "http://img.b2bpic.net/free-photo/positive-confident-businesswoman-wearing-formal-suit-standing-with-arms-folded_74855-10328.jpg", alt: "Customer avatar 2" },
            { src: "http://img.b2bpic.net/free-photo/positive-confident-businesswoman-wearing-formal-suit-standing-with-arms-folded_74855-10328.jpg", alt: "Customer avatar 3" },
            { src: "http://img.b2bpic.net/free-photo/pensive-person-alone-corridor-serious_1262-1042.jpg", alt: "Customer avatar 4" },
            { src: "http://img.b2bpic.net/free-photo/positive-confident-businesswoman-wearing-formal-suit-standing-with-arms-folded_74855-10328.jpg", alt: "Customer avatar 5" },
            { src: "http://img.b2bpic.net/free-photo/pensive-person-alone-corridor-serious_1262-1042.jpg", alt: "Customer avatar 6" }
          ]}
          useInvertedBackground={true}
          ratingAnimation="slide-up"
          avatarsAnimation="opacity"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Skincare Questions Answered"
          description="Everything you need to know about our products, ingredients, and skincare philosophy. We're here to help you achieve your best skin."
          tag="Support"
          textboxLayout="default"
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/caucasian-blonde-girl-applies-anti-aging-cream-skin-aging-her-mother-s-face-indoors-concept-natural-cosmetics-wrinkle-smoothing_197531-31469.jpg"
          imageAlt="Skincare consultation"
          mediaAnimation="opacity"
          mediaPosition="right"
          faqs={[
            {
              id: "1",              title: "How long before I see results?",              content: "Most customers notice visible improvements within 2-4 weeks of consistent use. Skin texture and hydration improve first, followed by overall radiance and clarity. Results vary by individual skin type and concerns."
            },
            {
              id: "2",              title: "Are your products suitable for sensitive skin?",              content: "Yes! Our formulations are hypoallergenic and free from harsh chemicals, parabens, and synthetic fragrances. We recommend starting with our Gentle Cleanser and building your routine gradually if you have very sensitive skin."
            },
            {
              id: "3",              title: "What is your return policy?",              content: "We offer a 60-day satisfaction guarantee. If you're not completely happy with your purchase, return it for a full refund. No questions asked. We're confident you'll love Luminose."
            },
            {
              id: "4",              title: "Can I use multiple serums together?",              content: "Absolutely. Our serums are formulated to work synergistically. Apply lighter serums first, then heavier ones. Allow 1-2 minutes between applications for optimal absorption."
            },
            {
              id: "5",              title: "Are ingredients organic and sustainable?",              content: "We use certified organic ingredients sourced from sustainable suppliers. We're committed to environmental responsibility and transparency about our sourcing practices."
            }
          ]}
          faqsAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Join Our Skincare Community"
          description="Subscribe to receive exclusive skincare tips, new product launches, and special member-only offers delivered to your inbox."
          tagIcon={Mail}
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
          inputPlaceholder="Your email address"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime. We'll share skincare insights, product news, and exclusive offers."
          tagAnimation="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Luminose"
          columns={[
            {
              title: "Shop",              items: [
                { label: "All Products", href: "#products" },
                { label: "New Arrivals", href: "#products" },
                { label: "Best Sellers", href: "#products" },
                { label: "Gift Sets", href: "#products" }
              ]
            },
            {
              title: "Learn",              items: [
                { label: "Skincare Guide", href: "#" },
                { label: "Ingredients", href: "#" },
                { label: "Our Story", href: "#about" },
                { label: "Sustainability", href: "#" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "FAQ", href: "#faq" },
                { label: "Shipping", href: "#" },
                { label: "Returns", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "TikTok", href: "https://tiktok.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Newsletter", href: "#contact" }
              ]
            }
          ]}
          copyrightText="© 2025 Luminose. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}