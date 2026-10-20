/* Shared copy, taken from the Trigarty concept brief. Pages import from here so that
   the same capability, stage or step reads identically wherever it appears. */

import type { Stage } from "@/lib/site";

export const CAPABILITIES = [
  {
    id: "business-architecture",
    num: "01",
    name: "Business Architecture",
    scope: "Strategy, business models, product strategy, positioning, brand, pricing and new business opportunities.",
    answers: ["The business model is outdated.", "New opportunities remain unused."],
    builds: ["Business model", "Product strategy", "Positioning and brand", "Pricing structure", "Cases for new business lines"],
    accent: "#63B7C9",
  },
  {
    id: "organizational-infrastructure",
    num: "02",
    name: "Organizational Infrastructure",
    scope: "Operations, processes, workflows, decision systems, governance, documentation and automation.",
    answers: ["Work depends on manual processes.", "The founder makes too many decisions.", "Internal systems do not connect."],
    builds: ["Operating processes and workflows", "Decision rights and governance", "Documentation people actually use", "Automation of repeat work"],
    accent: "#4BC5C7",
  },
  {
    id: "commercial-growth",
    num: "03",
    name: "Commercial Growth",
    scope: "GTM, marketing, sales, partnerships, customer acquisition, revenue systems and growth.",
    answers: ["Growth has slowed."],
    builds: ["Go-to-market plan", "Marketing and sales system", "Partnership programs", "Customer acquisition channels", "Revenue reporting"],
    accent: "#4DC2B1",
  },
  {
    id: "organizational-design",
    num: "04",
    name: "Organizational Design",
    scope: "Organization structure, leadership, hiring, capabilities, performance, culture and change.",
    answers: ["Teams work in silos.", "The organization has grown faster than its structure."],
    builds: ["Organization structure", "Leadership roles and responsibilities", "Hiring plan and process", "Performance system", "Change plan"],
    accent: "#76C47C",
  },
  {
    id: "digital-infrastructure-product",
    num: "05",
    name: "Digital Infrastructure & Product",
    scope: "Products, websites, software, SaaS, AI, automation, data, internal systems and technology modernization.",
    answers: ["Technology is outdated.", "The product is not evolving.", "Existing data is not used well.", "Legacy systems limit innovation."],
    builds: ["Products and SaaS", "Websites and software", "AI and automation", "Data systems", "Internal tools", "Modernized legacy systems"],
    accent: "#A4BE4B",
  },
  {
    id: "organizational-evolution",
    num: "06",
    name: "Organizational Evolution",
    scope: "Research, intelligence, innovation, R&D, transformation, emerging technology and continuous improvement.",
    answers: ["AI is changing the market.", "The company does not have the capability to build the required solution."],
    builds: ["Market and technology research", "R&D programs", "Transformation roadmap", "Emerging technology pilots", "Continuous improvement cycles"],
    accent: "#E9A400",
  },
] as const;

export const STAGE_NOTES: Record<Stage, string> = {
  Ideate: "An important idea needs to become a real business.",
  Build: "The product, business or system needs to exist and work.",
  Upgrade: "An existing system, process or product needs to be upgraded.",
  Grow: "The business needs to grow, and the current setup is slowing it down.",
  Rebuild: "The organization itself needs to be rebuilt around its next stage.",
  Transform: "The way the organization works needs to change, including with AI.",
  Evolve: "The work continues as the market and the organization keep changing.",
};

export const SEGMENTS: { id: string; name: string; path: Stage[]; line: string }[] = [
  { id: "founders", name: "Founders", path: ["Ideate", "Build"], line: "Turn important ideas into real businesses." },
  { id: "startups", name: "Startups", path: ["Build", "Grow", "Transform"], line: "Build products, systems and growth engines." },
  { id: "growing-businesses", name: "Growing Businesses", path: ["Upgrade", "Grow", "Rebuild"], line: "Remove the constraints created by growth." },
  { id: "agencies", name: "Agencies", path: ["Upgrade", "Rebuild", "Transform"], line: "Modernize the business model, operations, technology and delivery system." },
  { id: "established-organizations", name: "Established Organizations", path: ["Upgrade", "Transform", "Evolve"], line: "Modernize existing systems and build new capabilities." },
  { id: "legacy-enterprises", name: "Legacy Enterprises", path: ["Rebuild", "Transform", "Evolve"], line: "Modernize the organization without losing the value accumulated over decades." },
];

export const PROBLEMS = [
  "The business model is outdated.",
  "The product is not evolving.",
  "Technology is outdated.",
  "Internal systems do not connect.",
  "Work depends on manual processes.",
  "The founder makes too many decisions.",
  "Teams work in silos.",
  "The organization has grown faster than its structure.",
  "Growth has slowed.",
  "AI is changing the market.",
  "Existing data is not used well.",
  "Legacy systems limit innovation.",
  "New opportunities remain unused.",
  "The company does not have the capability to build the required solution.",
];

export const OUTGROWN = [
  ["business", "processes"],
  ["technology", "infrastructure"],
  ["team", "structure"],
  ["product", "original design"],
  ["growth", "operating model"],
] as const;

export const PROVIDERS = [
  { who: "A technology company", does: "builds technology." },
  { who: "A marketing agency", does: "runs marketing." },
  { who: "A consultant", does: "gives recommendations." },
  { who: "A recruitment company", does: "builds teams." },
  { who: "An implementation partner", does: "executes a defined project." },
];

export const MODELS = [
  { name: "Traditional consultancy", flow: ["Study", "Recommend", "Report"] },
  { name: "Traditional agency", flow: ["Brief", "Execute", "Deliver"] },
  { name: "Specialist technology company", flow: ["Requirement", "Build", "Handover"] },
  { name: "Trigarty", flow: ["Understand", "Build", "Implement", "Operate", "Transfer", "Evolve"] },
];

export const STEPS = [
  {
    num: "01",
    name: "Discover",
    line: "Find the real problem.",
    detail: "We study the whole organization before we decide what to build.",
    items: ["Business", "Customers", "Technology", "People", "Operations", "Product", "Growth", "Existing systems", "Constraints", "Opportunities"],
  },
  {
    num: "02",
    name: "Create",
    line: "Create what the organization needs.",
    detail: "The output depends on the problem, not on a service menu.",
    items: ["Business models", "Products", "Brands", "Operating systems", "Organizational structures", "Technology", "AI systems", "Automation", "Growth systems", "Internal tools", "New business units"],
  },
  {
    num: "03",
    name: "Implement",
    line: "Put the solution into the real organization.",
    detail: "We do not stop at a strategy document. We work with the people and systems that must use the solution.",
    items: [],
  },
  {
    num: "04",
    name: "Operate",
    line: "Work inside the organization when required.",
    detail: "We operate with the internal team, not beside it.",
    items: ["Product", "Technology", "Operations", "Growth", "Transformation", "AI", "Business operations", "Program execution"],
  },
  {
    num: "05",
    name: "Transfer",
    line: "Leave the organization stronger.",
    detail: "We document the system, build internal capability and transfer ownership. The goal is not permanent dependency.",
    items: ["Documented systems", "Internal capability", "Transferred ownership"],
  },
  {
    num: "06",
    name: "Partner",
    line: "Bring in trusted specialists where needed.",
    detail: "Trigarty does not need to perform every specialist task. We stay responsible for connecting the required capabilities to the objective.",
    items: ["Legal", "Accounting", "Registration", "Recruitment", "Manufacturing", "Specialist engineering", "Patents"],
  },
];

export const REBUILD_CHAIN = ["Business", "Structure", "People", "Processes", "Technology", "Product", "Growth"];

export const LEGACY_MOVES = [
  "Preserve what works.",
  "Remove what does not.",
  "Modernize legacy systems.",
  "Redesign workflows.",
  "Introduce AI.",
  "Build new products.",
  "Improve decision systems.",
  "Redesign teams.",
  "Create new capabilities.",
  "Develop new business models.",
];

export const IP_CHAIN = ["Problem", "Build", "Learn", "Codify", "Tool", "IP", "Product", "Venture", "Ownership"];

export const IP_OUTCOMES = [
  "Value for the client.",
  "Knowledge for Trigarty.",
  "A new capability.",
  "A reusable system.",
  "New IP.",
  "A future product.",
  "A potential venture.",
];

export const LONG_TERM_CHAIN = ["Problems", "Experience", "Capability", "Knowledge", "IP", "Tools", "Products", "Ventures", "Ownership"];

export const DIFFERENTIATORS = [
  {
    num: "01",
    title: "We are not a vendor.",
    body: "A vendor receives a brief and delivers a defined scope. We work with the organization to understand the real problem and take responsibility for making the required change happen.",
  },
  {
    num: "02",
    title: "We do not sell isolated services.",
    body: "We don't start with \"Do you need marketing, software, strategy or HR?\" We start with \"What are you trying to achieve, and what is preventing you from achieving it?\" Then we assemble the required capabilities.",
  },
  {
    num: "03",
    title: "We can rebuild the organization, not only individual functions.",
    body: "If the problem is structural, we work across business, people, operations, technology, product and growth to rebuild the organization around its next stage.",
  },
  {
    num: "04",
    title: "We build instead of only recommending.",
    body: "We don't stop at reports or recommendations. We design, build, implement, operate and transfer. That makes us closer to an external internal team than a consulting firm.",
  },
  {
    num: "05",
    title: "We work across organizational stages.",
    body: "We can enter when an idea needs to become a business, when a business needs to grow, when an existing system needs an upgrade, when the organization needs to be rebuilt, or when a legacy enterprise needs to modernize.",
  },
  {
    num: "06",
    title: "We turn experience into capability and IP.",
    body: "Every serious problem we solve makes Trigarty more capable. Experience becomes learning, learning becomes systems and IP, and some of that becomes products and ventures.",
  },
];

export const NOT_LIST = ["An agency.", "A consultancy.", "An IT company.", "A marketing company.", "A venture studio.", "A PE firm."];

/* Questions from Trigarty's discovery plan, phrased for the visitor. */
export const FIRST_QUESTIONS = [
  "What are you trying to achieve?",
  "What is stopping you?",
  "When did the problem start?",
  "What have you tried?",
  "What did you spend money on?",
  "What worked?",
  "What did not work?",
  "What happens if you do not solve it?",
  "Who owns the problem?",
  "What would solving it be worth?",
];

/* Current ventures. Descriptions only: no metrics. */
export const VENTURES = [
  {
    id: "aiden",
    name: "Aiden",
    field: "AI ecosystem and architecture",
    body: "Rebuilding the architecture of existing operating systems, devices and technology to be AI-native. The work includes an AI assistant for general and commercial use and a hardware and software ecosystem that runs offline, online, or as a hybrid of both.",
    roles: ["Operations", "Investor readiness", "Brand", "Strategy"],
    accent: "#63B7C9",
  },
  {
    id: "project-xr",
    name: "Project XR",
    field: "AR, VR and spatial computing",
    body: "A cross-device platform that adds a persistent digital layer to the real world, reachable through mobile, AR glasses and VR. It is built on five layers: Discovery, Navigation, Memory Trails, Quest and Social Canvas.",
    roles: ["Product execution", "Brand", "Systems", "Strategy"],
    accent: "#5CC697",
  },
  {
    id: "ewr",
    name: "EWR",
    field: "Event and program operations",
    body: "An event and program management platform built like a war room: one command center for coordinating back-end teams, contacts and live execution across hackathons, conferences and large programs.",
    roles: ["Operations", "Product execution", "Brand", "Strategy"],
    accent: "#E9A400",
  },
  {
    id: "zaiin",
    name: "ZAIIN",
    field: "Professional platform for doctors",
    body: "A hybrid of LinkedIn and Reddit built for doctors: a professional network and an open community for discussion in one platform, shaped around the medical profession.",
    roles: ["Medical fields R&D", "Operations building", "Team hiring", "Design"],
    accent: "#A4BE4B",
  },
];
