import sanityDataFetcher from "./sanityDataFetcher";
import sanityUrlBuilder from "./sanityUrlBuilder";

async function getPageInfo(locale: string) {
  const pageInfoGroqQuery = `
    *[_type == "pageInfo"][0] {
      "heroImage": heroImage,
      "aboutParagraph1": aboutParagraph1.${locale},
      "aboutParagraph2": aboutParagraph2.${locale},
      "aboutParagraph3": aboutParagraph3.${locale},
      "aboutImageNew": aboutImageNew,
      "contactText": contactText.${locale},
    }
  `;

  const pageInfoUrl = sanityUrlBuilder(pageInfoGroqQuery);

  const pageInfo = sanityDataFetcher(pageInfoUrl);
  return pageInfo;
}

export default getPageInfo;
