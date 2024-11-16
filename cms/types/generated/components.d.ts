import type { Schema, Struct } from '@strapi/strapi';

export interface BrandAddress extends Struct.ComponentSchema {
  collectionName: 'components_brand_addresses';
  info: {
    displayName: 'address';
  };
  attributes: {
    address2: Schema.Attribute.String;
    city: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Elmira'>;
    country: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    mapLink: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    postal: Schema.Attribute.String & Schema.Attribute.Required;
    province: Schema.Attribute.String & Schema.Attribute.Required;
    streetAddress: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BrandCompanyInfo extends Struct.ComponentSchema {
  collectionName: 'components_brand_company_infos';
  info: {
    description: '';
    displayName: 'CompanyInfo';
    icon: 'command';
  };
  attributes: {
    address: Schema.Attribute.Component<'brand.address', false>;
    companyName: Schema.Attribute.String & Schema.Attribute.Required;
    foundingDate: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'brand.logo', false>;
    socialMedia: Schema.Attribute.Component<'brand.social', true>;
    twitterHandle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'@twitter'>;
    url: Schema.Attribute.String;
  };
}

export interface BrandGlobalSeo extends Struct.ComponentSchema {
  collectionName: 'components_brand_global_seos';
  info: {
    displayName: 'GlobalSEO';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 3;
      }>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    jsonData: Schema.Attribute.JSON & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
        minLength: 3;
      }>;
  };
}

export interface BrandLogo extends Struct.ComponentSchema {
  collectionName: 'components_brand_logos';
  info: {
    displayName: 'Logo';
    icon: 'alien';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface BrandSocial extends Struct.ComponentSchema {
  collectionName: 'components_brand_socials';
  info: {
    displayName: 'social';
    icon: 'alien';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['Facebook', 'Instagram', 'X', 'Linkedin', 'Github', 'Youtube']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Facebook'>;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DataAddOn extends Struct.ComponentSchema {
  collectionName: 'components_data_add_ons';
  info: {
    displayName: 'Add On';
  };
  attributes: {
    available: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface DataFeature extends Struct.ComponentSchema {
  collectionName: 'components_data_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    available: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DataServiceIcon extends Struct.ComponentSchema {
  collectionName: 'components_data_service_icons';
  info: {
    description: '';
    displayName: 'Service Icon';
    icon: 'alien';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['Mobile', 'Responsive', 'PageSpeed', 'Seo', 'PPC', 'Copywriting']
    >;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DataTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_data_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    isFeatured: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    review: Schema.Attribute.Text;
  };
}

export interface LayoutAbout extends Struct.ComponentSchema {
  collectionName: 'components_layout_abouts';
  info: {
    description: '';
    displayName: 'About';
  };
  attributes: {
    about: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutContact extends Struct.ComponentSchema {
  collectionName: 'components_layout_contacts';
  info: {
    displayName: 'Contact';
    icon: 'envelop';
  };
  attributes: {
    button: Schema.Attribute.Component<'ui.button', false>;
    subHeading: Schema.Attribute.RichText;
    subject: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[NEW FORM SUBMISSION]'>;
  };
}

export interface LayoutContent extends Struct.ComponentSchema {
  collectionName: 'components_layout_contents';
  info: {
    displayName: 'Content';
    icon: 'alien';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface LayoutCta extends Struct.ComponentSchema {
  collectionName: 'components_layout_ctas';
  info: {
    description: '';
    displayName: 'CTA';
  };
  attributes: {
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Contact'>;
    link: Schema.Attribute.Component<'ui.link', false>;
    subHeading: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<"Have a project in mind? Let's talk about it. We are here to help you with your construction needs. ">;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    cta: Schema.Attribute.Component<'ui.link', true>;
    heading: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Heading'>;
    heroImg: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    subheading: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'subheading'>;
  };
}

export interface LayoutInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_layout_info_cards';
  info: {
    description: '';
    displayName: 'Info Card';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Component<'data.service-icon', false>;
    link: Schema.Attribute.Component<'ui.link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutPortfolio extends Struct.ComponentSchema {
  collectionName: 'components_layout_portfolios';
  info: {
    displayName: 'Portfolio';
  };
  attributes: {
    description: Schema.Attribute.Text;
    showcase: Schema.Attribute.Component<'layout.showcase', true>;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutPricing extends Struct.ComponentSchema {
  collectionName: 'components_layout_pricings';
  info: {
    displayName: 'Pricing';
    icon: 'shoppingCart';
  };
  attributes: {
    description: Schema.Attribute.Text;
    pricing_tiers: Schema.Attribute.Relation<
      'oneToMany',
      'api::pricing-tier.pricing-tier'
    >;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutService extends Struct.ComponentSchema {
  collectionName: 'components_layout_services';
  info: {
    description: '';
    displayName: 'Service';
  };
  attributes: {
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'subtitle'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'title'>;
  };
}

export interface LayoutServiceAreas extends Struct.ComponentSchema {
  collectionName: 'components_layout_service_areas';
  info: {
    description: '';
    displayName: 'serviceAreas';
  };
  attributes: {
    city: Schema.Attribute.Relation<'oneToMany', 'api::city-town.city-town'>;
    link: Schema.Attribute.Component<'ui.link', false>;
    mapUrl: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'subtitle'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Areas we service'>;
  };
}

export interface LayoutServiceInfo extends Struct.ComponentSchema {
  collectionName: 'components_layout_service_infos';
  info: {
    displayName: 'Service Info';
  };
  attributes: {
    card: Schema.Attribute.Component<'layout.info-card', true>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutShowcase extends Struct.ComponentSchema {
  collectionName: 'components_layout_showcases';
  info: {
    description: '';
    displayName: 'Showcase';
  };
  attributes: {
    cta: Schema.Attribute.Component<'ui.link', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String;
  };
}

export interface LayoutTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_layout_testimonials';
  info: {
    description: '';
    displayName: 'Testimonial';
  };
  attributes: {
    numberOfColumns: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 4;
        },
        number
      > &
      Schema.Attribute.DefaultTo<4>;
    testimonial: Schema.Attribute.Component<'data.testimonial', true>;
  };
}

export interface UiButton extends Struct.ComponentSchema {
  collectionName: 'components_ui_buttons';
  info: {
    description: '';
    displayName: 'button';
    icon: 'cursor';
  };
  attributes: {
    block: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'button text'>;
    size: Schema.Attribute.Enumeration<['md', 'lg', 'link']> &
      Schema.Attribute.DefaultTo<'lg'>;
    style: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'plain', 'animated']
    >;
    type: Schema.Attribute.Enumeration<['submit', 'reset', 'button']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'button'>;
  };
}

export interface UiCta extends Struct.ComponentSchema {
  collectionName: 'components_ui_ctas';
  info: {
    displayName: 'CTA';
    icon: 'quote';
  };
  attributes: {
    link: Schema.Attribute.Component<'ui.link', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Contact'>;
  };
}

export interface UiFooter extends Struct.ComponentSchema {
  collectionName: 'components_ui_footers';
  info: {
    description: '';
    displayName: 'Footer';
    icon: 'arrowDown';
  };
  attributes: {
    section: Schema.Attribute.Component<'ui.footer-section', true>;
  };
}

export interface UiFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_ui_footer_sections';
  info: {
    description: '';
    displayName: 'FooterSection';
    icon: 'chartCircle';
  };
  attributes: {
    links: Schema.Attribute.Relation<'oneToMany', 'api::nav-item.nav-item'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiLink extends Struct.ComponentSchema {
  collectionName: 'components_ui_links';
  info: {
    description: '';
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    block: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/contact-us'>;
    isExternal: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'link text'>;
    size: Schema.Attribute.Enumeration<['md', 'lg']> &
      Schema.Attribute.DefaultTo<'lg'>;
    style: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'plain', 'animated']
    > &
      Schema.Attribute.DefaultTo<'plain'>;
  };
}

export interface UiNavBar extends Struct.ComponentSchema {
  collectionName: 'components_ui_nav_bars';
  info: {
    description: '';
    displayName: 'NavBar';
    icon: 'apps';
  };
  attributes: {
    ctaLink: Schema.Attribute.Component<'ui.link', false> &
      Schema.Attribute.Required;
    navItems: Schema.Attribute.Relation<'oneToMany', 'api::nav-item.nav-item'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'brand.address': BrandAddress;
      'brand.company-info': BrandCompanyInfo;
      'brand.global-seo': BrandGlobalSeo;
      'brand.logo': BrandLogo;
      'brand.social': BrandSocial;
      'data.add-on': DataAddOn;
      'data.feature': DataFeature;
      'data.service-icon': DataServiceIcon;
      'data.testimonial': DataTestimonial;
      'layout.about': LayoutAbout;
      'layout.contact': LayoutContact;
      'layout.content': LayoutContent;
      'layout.cta': LayoutCta;
      'layout.hero': LayoutHero;
      'layout.info-card': LayoutInfoCard;
      'layout.portfolio': LayoutPortfolio;
      'layout.pricing': LayoutPricing;
      'layout.service': LayoutService;
      'layout.service-areas': LayoutServiceAreas;
      'layout.service-info': LayoutServiceInfo;
      'layout.showcase': LayoutShowcase;
      'layout.testimonial': LayoutTestimonial;
      'ui.button': UiButton;
      'ui.cta': UiCta;
      'ui.footer': UiFooter;
      'ui.footer-section': UiFooterSection;
      'ui.link': UiLink;
      'ui.nav-bar': UiNavBar;
    }
  }
}
