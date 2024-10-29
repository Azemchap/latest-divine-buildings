import { defineQuery } from "next-sanity";

export const PLANS_QUERY = defineQuery(`*[_type == "plan" && defined(slug.current)] | order(createdAt desc) {
    _id,
    name,
    slug,
    description,
    category[]->{
    _id,
    slug,
    name
    },
    price,
    rating,
    numReview,
    createdAt,
    images,
    body,
}`);