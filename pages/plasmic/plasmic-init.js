import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { ContentContainer } from '../../components/ContentContainer';
import { Headline } from '../../components/Headline';
import { Quote } from '../../components/Quote';
import { MaskImage } from '../../components/MaskImage';

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "w7EBWkpkxua5hBtvHyqB8H",  // ID of a project you are using
      token: "dG57nY0RkbMzjt8xE0oiIVPK5BOCou0z0p4hXLzrYf0WA5gKS0dRJviWBJX1r1fW5inn0dLClbO2H9kczQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})

PLASMIC.registerComponent(ContentContainer, {
  name: 'ContentContainer',
  props: {
    shapeType: {
      type: 'choice',
      options: ['tripple', 'quads1', 'quads2', 'quads3']
    },
    children: 'slot'
  }
});

PLASMIC.registerComponent(Headline, {
  name: 'Headline',
  props: {
    line1: 'string',
    line2: 'string',
  }
});

PLASMIC.registerComponent(Quote, {
  name: 'Quote',
  props: {
    text: 'string',
  }
});

PLASMIC.registerComponent(MaskImage, {
  name: 'MaskImage',
  props: {
    url: 'imageUrl',
    shapeType: {
      type: 'choice',
      options: ['tripple', 'quads1', 'quads2', 'quads3']
    },
    maskPos: 'string',
    rightPos: 'string',
    topPos: 'string',
    width: 'string',
  }
});