import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Injectable()
export class SeoService {
  constructor(private meta: Meta) { }
  generateTags(config) {
    // default values
    config = {
      title: 'Angular <3 Linkbots',
      description: 'My SEO friendly Angular Component',
      image: 'https://angularfirebase.com/images/logo.png',
      slug: '',
      ...config
    };
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@angularfirebase' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'AngularFirebase' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: `http://104.236.237.133:3789/${config.slug}` });
  }
}
