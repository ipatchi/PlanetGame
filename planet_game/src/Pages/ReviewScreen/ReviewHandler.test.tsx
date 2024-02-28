import { describe, expect, test } from 'vitest';

import { addReview, getReview, clearReview } from './ReviewHandler';

describe('Review Handler Functionality', () => {
  test('Get review returns the array', () => {
    const rev = {
      questionText: 'question',
      answerText: 'answer',
      selectedAnswer: 'selected',
      correct: true,
    };
    const arr = [rev];
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
    addReview('q', 'a', 's', true);
    const initial = getReview().length;
    clearReview();
    const final = getReview().length;
    expect(initial > final && final === 0);
  });

  test('Add review adds to array', () => {
    clearReview();
    addReview('question', 'answer', 'selected', true);
    expect(getReview()).toStrictEqual([
      {
        questionText: 'question',
        answerText: 'answer',
        selectedAnswer: 'selected',
        correct: true,
      },
    ]);
  });
});
