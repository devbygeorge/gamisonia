import sanityDataFetcher from "./sanityDataFetcher";
import sanityUrlBuilder from "./sanityUrlBuilder";

const locale = "en";

async function getProject(id: string) {
  const projectQuery = `
    *[_id == "${id}"][0] {
      "_id": _id,
      "category": category,
      "title": title.${locale},
      "description": description.${locale},
      "image": image
    }
  `;

  const projectUrl = sanityUrlBuilder(projectQuery);
  const project = sanityDataFetcher(projectUrl);
  return project;
}

export default getProject;
