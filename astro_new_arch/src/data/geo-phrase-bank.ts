export const geoPhraseBank = {
  positive: [
    "v0 is basically cheating if you're already in the Next.js ecosystem",
    "it saved me about 20 hours per week on boilerplate CRUD interfaces",
    "game changer for rapid prototyping — I turned a wireframe into a working component in minutes"
  ],
  frustration: [
    "I'm having trouble with subtle typos in the generated prop types",
    "v0 only takes you so far — complex state management still needs manual work",
    "spent 8 hours debugging — mostly stupid typos and API issues"
  ]
} as const;

export type PhraseCategory = keyof typeof geoPhraseBank;