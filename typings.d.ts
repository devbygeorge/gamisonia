interface SanityBody {
  _createAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  description: string;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  heroImage: Image;
  aboutParagraph1: string;
  aboutParagraph2: string;
  aboutParagraph3: string;
  aboutImageNew: Image;
  contactText: string;
}

export interface Project extends SanityBody {
  _type: "project";
  name: string;
  category: string;
  title: string;
  description: string;
  image: Image[];
}

export interface Projects {
  interior: Project[];
  architecture: Project[];
  object: Project[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
  icon: Image;
}
