function sanityUrlBuilder(groqQuery: string) {
  const encodedQuery = encodeURIComponent(groqQuery);

  return `https://${
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  }.api.sanity.io/v2021-06-07/data/query/${
    process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
  }?query=${encodedQuery}`;
}

export default sanityUrlBuilder;
