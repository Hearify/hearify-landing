import type { FAQBlockProps } from '@/containers/FAQBlock/FAQBlock';

// eslint-disable-next-line import/prefer-default-export
export const homeFaq: FAQBlockProps[] = [
  {
    question: 'Is it free to use?',
    answer: 'Yes, during beta testing you can generate up to 30 quizzes per month.',
  },
  {
    question: `What kinds of materials can I upload?`,
    answer: `It could be any book, presentation, lecture or document. The file must be in PDF format and weigh less than 10 MB. You can also insert YouTube video link.`,
  },
  {
    question: 'What types of questions can I generate?',
    answer: 'You can create multiple choice and single choice questions, fill in, matching and open questions.',
  },
  {
    question: 'What is the quality of the quizzes?',
    answer: `The quality of the test depends on the quality of the material you have uploaded. It's essential to understand that, similar to humans, AI can make errors, and there's no guarantee of 100% accuracy. We provide all the tools needed to modify or delete questions in a created quiz before sharing it with others.`,
  },
];
