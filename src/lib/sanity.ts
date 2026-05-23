import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "trigarty-placeholder-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-01",
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

/*
==========================================================================
SANITY SCHEMA DEFINITIONS (Copy these to your Sanity Studio Schemas folder)
==========================================================================

1. embedLog.ts (Case Studies)
-----------------------------
export default {
  name: 'embedLog',
  title: 'Embed Log (Case Studies)',
  type: 'document',
  fields: [
    { name: 'client', title: 'Client / Company Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'client' } },
    { name: 'tag', title: 'Engagement Tag', type: 'string', description: 'e.g., Hiring Operations, Org Design' },
    { name: 'metric', title: 'Core Metric Highlight', type: 'string', description: 'e.g., 3.2×, -55%' },
    { name: 'metricLabel', title: 'Metric Label', type: 'string', description: 'e.g., Shipping Velocity Increase' },
    { name: 'bottleneck', title: 'Bottleneck Identified', type: 'text' },
    { name: 'outcome', title: 'Operator Deliverable / Outcome', type: 'text' },
    {
      name: 'timeline',
      title: 'Execution Log Lifecycle',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'week', title: 'Lifecycle Phase (e.g., Week 1-2)', type: 'string' },
            { name: 'title', title: 'Phase Title', type: 'string' },
            { name: 'desc', title: 'Phase Description', type: 'text' }
          ]
        }
      ]
    },
    {
      name: 'points',
      title: 'Key Deliverables List',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}

2. groqQueries.ts (GROQ API fetch strings)
------------------------------------------
export const allEmbedLogsQuery = `*[_type == "embedLog"] | order(_createdAt desc) {
  num,
  slug,
  client,
  metric,
  metricLabel,
  bottleneck,
  outcome,
  tag
}`;

export const singleEmbedLogQuery = `*[_type == "embedLog" && slug.current == $slug][0] {
  client,
  tag,
  metric,
  metricLabel,
  bottleneck,
  outcome,
  timeline,
  points
}`;
*/
