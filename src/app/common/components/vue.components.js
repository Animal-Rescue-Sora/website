import page from './page';
import siteHeader from './site-header';
import globalNavigation from './global-navigation';
import globalNavigationItem from './global-navigation-item';
import hero from './hero';
import pageSection from './page-section';
import heading2 from './heading-2';
import siteFooter from './site-footer';

export default {
  page,
  siteHeader,
  globalNavigation,
  globalNavigationItem,
  hero,
  pageSection,
  heading2,
  siteFooter,
  'amazon-button': () => import(/* webpackChunkName: "amazon-button" */'./amazon-button'),
  'contact-bar': () => import(/* webpackChunkName: "contact-bar" */'./contact-bar'),
  'decision-to-foster-parent-slider': () => import(/* webpackChunkName: "decision-to-foster-parent-slider" */'./decision-to-foster-parent-slider'),
  'faq-list-item': () => import(/* webpackChunkName: "faq-list-item" */'./faq-list-item'),
  'faq-list': () => import(/* webpackChunkName: "faq-list" */'./faq-list'),
  'google-map': () => import(/* webpackChunkName: "google-map" */'./google-map'),
  'news': () => import(/* webpackChunkName: "news" */'./news'),
  'supported-slider': () => import(/* webpackChunkName: "supported-slider" */'./supported-slider'),
  'structured-data': () => import(/* webpackChunkName: "structured-data" */'./structured-data'),
  'waiting-card-list': () => import(/* webpackChunkName: "waiting-card-list" */'./waiting-card-list'),
};
