// Image-to-Prompt Mapping
// Maps each case study to its corresponding query result image
const atlasData = [
  {
    id: 1,
    number: "Case 01",
    type: "target", // target, failure, style-check
    query: "A vibrant pink social media advertisement for lipsticks featuring bold, high-contrast modern typography.",
    topK: 5,
    threshold: 0.08,
    image: "images/Prompt1.png",
    analysis: "High Semantic Alignment. The model strongly connects explicit color keywords ('vibrant pink') and functional context ('advertisement') with text-heavy social media graphics."
  },
  {
    id: 2,
    number: "Case 02",
    type: "failure",
    query: "A minimalist flat vector illustration of a lipstick tube against a solid purple background.",
    topK: 5,
    threshold: 0.07,
    image: "images/Prompt2.png",
    analysis: "Noun Dominance Bias. The system isolates lipstick-related assets purely based on the core object noun, entirely ignoring the contradictory style modifiers 'minimalist'."
  },
  {
    id: 3,
    number: "Case 03",
    type: "target",
    query: "Hand-painted Indian truck art with vibrant colors and ornate, heavy-weighted typography.",
    topK: 5,
    threshold: 0.08,
    image: "images/Prompt3.1.png",
    analysis: "Texture & Saturated Weighting. The model successfully matches the complex, heavy-weighted typographic layouts and high-density, high-saturation color distributions."
  },
  {
    id: 4,
    number: "Case 04",
    type: "failure",
    query: "Taylor Swift eating an apple.",
    topK: 5,
    threshold: 0.00,
    image: "images/Prompt4.png",
    analysis: "Absolute Subject Absence. Because neither the specific identity nor the action exists in the archive, the pipeline defaults to low-confidence, arbitrary assets."
  },
  {
    id: 5,
    number: "Case 05",
    type: "failure",
    query: "A blue car.",
    topK: 5,
    threshold: 0.10,
    image: "images/Prompt5.png",
    analysis: "Color-Channel Over-Indexing. With no vehicles present in the corpus, the vision encoder relies completely on color matching."
  },
  {
    id: 6,
    number: "Case 06",
    type: "failure",
    query: "Whimsical white cows falling from the sky like rain into a lush green field.",
    topK: 5,
    threshold: 0.02,
    image: "images/Prompt6.png",
    analysis: "Narrative Composition Collapse. The model fails to parse complex surreal actions and scattered arrangements."
  },
  {
    id: 7,
    number: "Case 07",
    type: "target",
    query: "Shah Rukh Khan performing a dance routine on a neon-lit stage.",
    topK: 5,
    threshold: 0.01,
    image: "images/Prompt7.png",
    analysis: "Stylistic Proxy Dominance. Lacking the specific figure, the engine pivots to the atmospheric modifier 'neon-lit.'"
  },
  {
    id: 8,
    number: "Case 08",
    type: "target",
    query: "A serene morning at a lush tea garden in Munnar featuring rolling green hills and hand-drawn farmers.",
    topK: 5,
    threshold: 0.06,
    image: "images/Prompt8.png",
    analysis: "Organic Hue Clustering. The pipeline maps this query near illustration assets containing heavy green tones and fluid line art."
  },
  {
    id: 9,
    number: "Case 09",
    type: "style-check",
    query: "A 1920s Bauhaus-style poster with rigid geometric shapes and a strict primary color palette.",
    topK: 5,
    threshold: 0.15,
    image: "images/Prompt9.png",
    analysis: "Structural Grid Alignment. The embedding space easily connects rigid geometric shapes with corporate design grids."
  },
  {
    id: 10,
    number: "Case 10",
    type: "failure",
    query: "A surreal dreamscape featuring dozens of watchful blue eyes hidden within a dark, bioluminescent jungle.",
    topK: 5,
    threshold: 0.05,
    image: "images/Prompt10.png",
    analysis: "Macro Over Micro Details. The encoder prioritizes the overall color mood and organic texture over micro-components."
  },
  {
    id: 11,
    number: "Case 11",
    type: "failure",
    query: "A logo that uses negative space to hide a second image.",
    topK: 5,
    threshold: 0.08,
    image: "images/Query11.1.png",
    analysis: "Conceptual Blindness. The system cannot mathematically comprehend high-level visual metaphors like 'negative space.'"
  },
  {
    id: 12,
    number: "Case 12",
    type: "target",
    query: "Handwritten typography that feels rushed and imperfect.",
    topK: 5,
    threshold: 0.06,
    image: "images/Prompt11.png",
    analysis: "Micro-Texture Sensitivity. The pipeline accurately surfaces raw sketches and expressive posters with imperfect, organic typography."
  },
  {
    id: 13,
    number: "Case 13",
    type: "failure",
    query: "A logo that uses negative space to hide a second image.",
    topK: 5,
    threshold: 0.09,
    image: "images/Query13.png",
    analysis: "Consistency Validation. Repeated query demonstrates consistency in retrieval patterns, validating stable behavior across identical prompts."
  }
];
