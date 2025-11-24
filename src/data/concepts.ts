import slugify from "slugify";

interface Resource {
  type: "video" | "article";
  title: string;
  url: string;
}

interface Concept {
  name: string;
  eli5: string;
  resources: Resource[];
  slug: string;
}

interface Category {
  title: string;
  concepts: Concept[];
  slug: string;
}

const categories = [
  {
    title: "Software Design Principles",
    concepts: [
      {
        name: "SOLID Principles",
        eli5: "The SOLID principles are five simple rules to write clean, easy-to-change software: Single Responsibility (one job per class), Open/Closed (extend without changing), Liskov Substitution (replace without breaking), Interface Segregation (small, specific interfaces), Dependency Inversion (depend on abstractions, not details).",
        resources: [
          {
            title: "SOLID",
            url: "https://en.wikipedia.org/wiki/SOLID",
            type: "article",
          },
          {
            title:
              "SOLID Design Principles Explained: Building Better Software Architecture",
            url: "https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design",
            type: "article",
          },
          {
            title: "SOLID Principles with Real Life Examples",
            url: "https://www.geeksforgeeks.org/system-design/solid-principle-in-programming-understand-with-real-life-examples/",
            type: "article",
          },
        ],
      },
      {
        name: "KISS Principle",
        eli5: 'The KISS Principle stands for "Keep It Simple, Stupid." It means when designing something—like a product, system, or explanation—you should make it as simple and clear as possible. Complexity often causes mistakes, confusion, or failure, so simplicity usually works best.',
        resources: [
          {
            title: "KISS principle",
            url: "https://en.wikipedia.org/wiki/KISS_principle",
            type: "article",
          },
          {
            title: "KISS Principle in Software Development",
            url: "https://www.geeksforgeeks.org/software-engineering/kiss-principle-in-software-development/",
            type: "article",
          },
        ],
      },
    ],
  },
];

export const concepts: Category[] = categories.map((category) => {
  const slugifiedCategory = {
    ...category,
    slug: "",
  };

  slugifiedCategory.concepts = category.concepts.map((concept) => ({
    ...concept,
    slug: slugify(concept.name.toLowerCase()),
  })) as Concept[];

  slugifiedCategory.slug = slugify(category.title.toLowerCase());

  return slugifiedCategory as Category;
});
