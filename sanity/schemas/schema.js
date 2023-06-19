// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import pageInfo from "./pageInfo";
import project from "./project";
import social from "./social";

// Create localized string type
const localeString = {
  title: "Loclaized string",
  name: "localeString",
  type: "object",
  fields: [
    {
      title: "English",
      name: "en",
      type: "string",
    },
    {
      title: "Georgian",
      name: "ge",
      type: "string",
    },
  ],
};

// Create localized text type
const localeText = {
  title: "Loclaized Text",
  name: "localeText",
  type: "object",
  fields: [
    {
      title: "English",
      name: "en",
      type: "text",
    },
    {
      title: "Georgian",
      name: "ge",
      type: "text",
    },
  ],
};

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    localeString,
    localeText,
    pageInfo,
    project,
    social,
  ]),
});
