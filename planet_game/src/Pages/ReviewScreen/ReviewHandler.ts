import ReviewText from './ReviewType';

// Create an array to hold the question, answer, and selected answer
const ReviewArray: ReviewText[] = [];

const addReview = (
  question: string,
  answer: string,
  selectedAnswer: string,
  correct: boolean
) => {
  const R: ReviewText = {
    questionText: question,
    answerText: answer,
    selectedAnswer: selectedAnswer,
    correct: correct,
  };
  ReviewArray.push(R);
};

const getReview = () => {
    return ReviewArray
}

const clearReview = () => {
    ReviewArray.length = 0;
}

export {addReview, getReview, clearReview};
