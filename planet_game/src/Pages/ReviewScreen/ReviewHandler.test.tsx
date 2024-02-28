import { addReview, getReview, clearReview } from './ReviewHandler';
import { describe, expect, test } from 'vitest';

describe('Review Handler Functionality', () => {
  const rev = {
    questionText: 'question',
    answerText: 'answer',
    selectedAnswer: 'selected',
    correct: true,
  };
  const arr = [rev];
  test('Get review returns the array', () => {
    clearReview();
    addReview(
      rev.questionText,
      rev.answerText,
      rev.selectedAnswer,
      rev.correct
    );
    expect(getReview()).toStrictEqual(arr);
  });

  test('Clear review empties the array', () => {
    addReview(
      rev.questionText,
      rev.answerText,
      rev.selectedAnswer,
      rev.correct
    );
    const initial = getReview().length;
    clearReview();
    const final = getReview().length;
    expect(initial > final && final === 0);
  });

  test('Add review adds to array', () => {
    clearReview();
    addReview('question', 'answer', 'selected', true);
    expect(getReview()).toStrictEqual(arr);
  });
});
