import skull from "../assets/images/posts/colorsArticle.jpg";
import typo from "../assets/images/posts/typoArticle.jpg";
import layout from "../assets/images/posts/layout.jpg";
import Hierarchy from "../assets/images/posts/Hierarchy.jpg";
const articles = [
  {
    name: "color-theory-basics",
    title: "Color Theory Basics for Graphic Designers",
    image: skull,
    content: [
      "Color theory is one of the most important foundations in graphic design. It helps designers create visual harmony, guide user attention, and communicate emotion effectively. Understanding warm and cool colors allows you to control the mood of your layout.",
      "Primary colors (red, blue, and yellow) form the basis of all other colors. Secondary colors are created by mixing primary colors, while tertiary colors fill the gaps in between. Designers use these relationships to create balanced palettes.",
      "Complementary colors sit opposite each other on the color wheel. When paired together, they create strong contrast and visual energy. This technique is commonly used in call-to-action buttons and promotional graphics.",
      "Analogous color schemes use colors that sit next to each other on the wheel. These create a softer, more cohesive look and are often used in branding, UI design, and editorial layouts.",
    ],
  },
  {
    name: "typography-in-design",
    title: "Typography Principles Every Designer Should Know",
    image: typo,
    content: [
      "Typography is more than choosing fonts. It involves hierarchy, spacing, alignment, and readability. Good typography improves communication and makes your design easier to understand.",
      "Hierarchy helps users scan content quickly. You can create hierarchy using font size, weight, color, and spacing. Headlines should stand out clearly from body text and supporting information.",
      "Line height and letter spacing affect readability. Too little spacing makes text cramped, while too much spacing makes it harder to read. Finding the right balance is key for long-form content.",
      "Pairing fonts is also important. A common approach is combining a serif font for headings with a sans-serif font for body text. This creates contrast while maintaining readability.",
    ],
  },
  {
    name: "layout-and-grid-systems",
    title: "Using Grid Systems for Better Layouts",
    image: layout,
    content: [
      "Grid systems help designers create consistent and organized layouts. They provide structure while still allowing creative flexibility. Most modern UI and web designs rely heavily on grid-based layouts.",
      "Columns divide content into manageable sections. A 12-column grid is commonly used because it can easily split into halves, thirds, and quarters. This makes responsive design easier.",
      "Spacing is just as important as content. White space improves readability and gives elements room to breathe. A crowded design often feels overwhelming and unprofessional.",
      "Alignment creates visual order. When elements line up consistently, the design feels more polished. Designers often align text, images, and buttons to the same grid lines.",
    ],
  },
  {
    name: "visual-hierarchy",
    title: "Creating Strong Visual Hierarchy",
    image: Hierarchy,
    content: [
      "Visual hierarchy determines what users notice first. Designers use size, contrast, color, and spacing to guide the viewer’s eye through the layout.",
      "Large elements attract attention first. Headlines, hero images, and featured content should be visually dominant. Supporting content should be smaller and less prominent.",
      "Contrast is another powerful tool. Dark text on a light background improves readability. Bright colors can highlight important actions like buttons and links.",
      "Spacing also influences hierarchy. More space around an element makes it feel more important. Designers often isolate key elements to draw attention to them.",
    ],
  },
];

export default articles;
