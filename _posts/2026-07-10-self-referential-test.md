---
layout: blog-post
title: "Can You Solve This Self-Referential Logic Puzzle?"
subtitle: "The only thing this puzzle references more than logic... is itself."
date: 2026-07-10
permalink: /blog/self-referential-test/
excerpt: "Questions that question themselves."
description: "If the quiz starts asking existential questions, you're probably on the right track."
header:
  og_image: /assets/images/Favicon.png
tags:
  - Self-referential-test
  - Logic Puzzle
  - Fun
---

## Background

A self-referential quiz is a logic game where the rules keep pointing back at themselves. Instead of asking you about history, science, or math, the game asks questions about... the game. One question might ask how many questions have the answer "A", while another may say "the next 3 questions are all the same letter". Every answer changes the rest, so it's like trying to solve a puzzle that's constantly staring back at itself.

- Some questions are designed to provide hints for other questions and may not be immediately helpful on their own.
- If a statement is not phrased as a True/False question, you may assume it is always true.
- There is exactly one solution to this puzzle. Every statement can be satisfied simultaneously in one and only one way.
- Most importantly, have fun!

If you enjoy this puzzle, I recommend checking out [Brainzilla's collection of self-referential quizzes](https://www.brainzilla.com/logic/self-referential-quiz/srat/) for even more mind-bending challenges.

<div class="SRQ-newspaper">

<header class="SRQ-masthead">
  <p class="SRQ-masthead-kicker">Special Edition · Logic &amp; Games</p>
  <h3 class="SRQ-masthead-title">Researchers Baffled by New Self-Referential Test</h3>
  <p class="SRQ-masthead-deck">Readers advised to proceed with careful reasoning</p>
</header>

<div class="SRQ-quiz" id="SRQ-quiz">

<div class="SRQ-toolbar">
  <button type="button" class="SRQ-btn SRQ-btn--primary" id="SRQ-check">Check answers</button>
  <button type="button" class="SRQ-btn SRQ-btn--ghost" id="SRQ-reset">Reset</button>
  <p class="SRQ-score" id="SRQ-score" hidden aria-live="polite"></p>
</div>

<div class="SRQ-columns">
<div class="SRQ-column">

<div class="SRQ-question" data-answer="A">
  <div class="SRQ-question-header">
    <span class="SRQ-num">1</span>
    <p class="SRQ-prompt">Of the following, which is the only question to have "D" as the correct answer?</p>
  </div>
  <fieldset class="SRQ-options">
    <legend class="visually-hidden">Question 1 options</legend>
    <label class="SRQ-option"><input type="radio" name="srq-1" value="A"><span class="SRQ-letter">A</span><span class="SRQ-text">3</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-1" value="B"><span class="SRQ-letter">B</span><span class="SRQ-text">5</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-1" value="C"><span class="SRQ-letter">C</span><span class="SRQ-text">2</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-1" value="D"><span class="SRQ-letter">D</span><span class="SRQ-text">7</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-1" value="E"><span class="SRQ-letter">E</span><span class="SRQ-text">1</span></label>
  </fieldset>
  <p class="SRQ-feedback" aria-live="polite"></p>
</div>

<div class="SRQ-question" data-answer="A">
  <div class="SRQ-question-header">
    <span class="SRQ-num">2</span>
    <p class="SRQ-prompt">There are more questions with answers of A than B?</p>
  </div>
  <fieldset class="SRQ-options">
    <legend class="visually-hidden">Question 2 options</legend>
    <label class="SRQ-option"><input type="radio" name="srq-2" value="A"><span class="SRQ-letter">A</span><span class="SRQ-text">True</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-2" value="B"><span class="SRQ-letter">B</span><span class="SRQ-text">False</span></label>
  </fieldset>
  <p class="SRQ-feedback" aria-live="polite"></p>
</div>

<div class="SRQ-question" data-answer="D">
  <div class="SRQ-question-header">
    <span class="SRQ-num">3</span>
    <p class="SRQ-prompt">The answer to this question is A, if and only if the answer to 5 is B, otherwise the answer to 6 is D.</p>
  </div>
  <fieldset class="SRQ-options">
    <legend class="visually-hidden">Question 3 options</legend>
    <label class="SRQ-option"><input type="radio" name="srq-3" value="A"><span class="SRQ-letter">A</span><span class="SRQ-text">"Uhhh"</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-3" value="B"><span class="SRQ-letter">B</span><span class="SRQ-text">"I did not even hear you"</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-3" value="C"><span class="SRQ-letter">C</span><span class="SRQ-text">"Cup Noodles"</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-3" value="D"><span class="SRQ-letter">D</span><span class="SRQ-text">"Papaya"</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-3" value="E"><span class="SRQ-letter">E</span><span class="SRQ-text">"Peach"</span></label>
  </fieldset>
  <p class="SRQ-feedback" aria-live="polite"></p>
</div>

<div class="SRQ-question" data-answer="A">
  <div class="SRQ-question-header">
    <span class="SRQ-num">4</span>
    <p class="SRQ-prompt">The answer to one of the next 3 questions is A.</p>
  </div>
  <fieldset class="SRQ-options">
    <legend class="visually-hidden">Question 4 options</legend>
    <label class="SRQ-option"><input type="radio" name="srq-4" value="A"><span class="SRQ-letter">A</span><span class="SRQ-text">True</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-4" value="B"><span class="SRQ-letter">B</span><span class="SRQ-text">False</span></label>
  </fieldset>
  <p class="SRQ-feedback" aria-live="polite"></p>
</div>

<div class="SRQ-question" data-answer="A">
  <div class="SRQ-question-header">
    <span class="SRQ-num">5</span>
    <p class="SRQ-prompt">Question 6's answer is the same as the answer for question 3 but not 7.</p>
  </div>
  <fieldset class="SRQ-options">
    <legend class="visually-hidden">Question 5 options</legend>
    <label class="SRQ-option"><input type="radio" name="srq-5" value="A"><span class="SRQ-letter">A</span><span class="SRQ-text">6</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-5" value="B"><span class="SRQ-letter">B</span><span class="SRQ-text">11</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-5" value="C"><span class="SRQ-letter">C</span><span class="SRQ-text">2</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-5" value="D"><span class="SRQ-letter">D</span><span class="SRQ-text">4</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-5" value="E"><span class="SRQ-letter">E</span><span class="SRQ-text">5</span></label>
  </fieldset>
  <p class="SRQ-feedback" aria-live="polite"></p>
</div>

<div class="SRQ-question" data-answer="D">
  <div class="SRQ-question-header">
    <span class="SRQ-num">6</span>
    <p class="SRQ-prompt">The answer for question 5 is the number of characters (spaces included) of the right answer from question 3.</p>
  </div>
  <fieldset class="SRQ-options">
    <legend class="visually-hidden">Question 6 options</legend>
    <label class="SRQ-option"><input type="radio" name="srq-6" value="A"><span class="SRQ-letter">A</span><span class="SRQ-text">S</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-6" value="B"><span class="SRQ-letter">B</span><span class="SRQ-text">R</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-6" value="C"><span class="SRQ-letter">C</span><span class="SRQ-text">K</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-6" value="D"><span class="SRQ-letter">D</span><span class="SRQ-text">J</span></label>
  </fieldset>
  <p class="SRQ-feedback" aria-live="polite"></p>
</div>

</div>
<div class="SRQ-column">

<div class="SRQ-question" data-answer="B">
  <div class="SRQ-question-header">
    <span class="SRQ-num">7</span>
    <p class="SRQ-prompt">The answer to this question is the total number of B's that are the correct answer.</p>
  </div>
  <fieldset class="SRQ-options">
    <legend class="visually-hidden">Question 7 options</legend>
    <label class="SRQ-option"><input type="radio" name="srq-7" value="A"><span class="SRQ-letter">A</span><span class="SRQ-text">3</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-7" value="B"><span class="SRQ-letter">B</span><span class="SRQ-text">1</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-7" value="C"><span class="SRQ-letter">C</span><span class="SRQ-text">2</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-7" value="D"><span class="SRQ-letter">D</span><span class="SRQ-text">4</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-7" value="E"><span class="SRQ-letter">E</span><span class="SRQ-text">7</span></label>
  </fieldset>
  <p class="SRQ-feedback" aria-live="polite"></p>
</div>

<div class="SRQ-question" data-answer="C">
  <div class="SRQ-question-header">
    <span class="SRQ-num">8</span>
    <p class="SRQ-prompt">The answers to 7, 8, 10, and 12 are all different.</p>
  </div>
  <fieldset class="SRQ-options">
    <legend class="visually-hidden">Question 8 options</legend>
    <label class="SRQ-option"><input type="radio" name="srq-8" value="A"><span class="SRQ-letter">A</span><span class="SRQ-text">3</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-8" value="B"><span class="SRQ-letter">B</span><span class="SRQ-text">4</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-8" value="C"><span class="SRQ-letter">C</span><span class="SRQ-text">5</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-8" value="D"><span class="SRQ-letter">D</span><span class="SRQ-text">6</span></label>
  </fieldset>
  <p class="SRQ-feedback" aria-live="polite"></p>
</div>

<div class="SRQ-question" data-answer="D">
  <div class="SRQ-question-header">
    <span class="SRQ-num">9</span>
    <p class="SRQ-prompt">How many A's were in the previous 3 questions?</p>
  </div>
  <fieldset class="SRQ-options">
    <legend class="visually-hidden">Question 9 options</legend>
    <label class="SRQ-option"><input type="radio" name="srq-9" value="A"><span class="SRQ-letter">A</span><span class="SRQ-text">2</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-9" value="B"><span class="SRQ-letter">B</span><span class="SRQ-text">3</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-9" value="C"><span class="SRQ-letter">C</span><span class="SRQ-text">4</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-9" value="D"><span class="SRQ-letter">D</span><span class="SRQ-text">0</span></label>
  </fieldset>
  <p class="SRQ-feedback" aria-live="polite"></p>
</div>

<div class="SRQ-question" data-answer="D">
  <div class="SRQ-question-header">
    <span class="SRQ-num">10</span>
    <p class="SRQ-prompt">Which question has the same answer as this question?</p>
  </div>
  <fieldset class="SRQ-options">
    <legend class="visually-hidden">Question 10 options</legend>
    <label class="SRQ-option"><input type="radio" name="srq-10" value="A"><span class="SRQ-letter">A</span><span class="SRQ-text">#7</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-10" value="B"><span class="SRQ-letter">B</span><span class="SRQ-text">#6</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-10" value="C"><span class="SRQ-letter">C</span><span class="SRQ-text">#3</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-10" value="D"><span class="SRQ-letter">D</span><span class="SRQ-text">#11</span></label>
  </fieldset>
  <p class="SRQ-feedback" aria-live="polite"></p>
</div>

<div class="SRQ-question" data-answer="D">
  <div class="SRQ-question-header">
    <span class="SRQ-num">11</span>
    <p class="SRQ-prompt">The number of answers that are A on the quiz are odd.</p>
  </div>
  <fieldset class="SRQ-options">
    <legend class="visually-hidden">Question 11 options</legend>
    <label class="SRQ-option"><input type="radio" name="srq-11" value="A"><span class="SRQ-letter">A</span><span class="SRQ-text">Elephant</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-11" value="B"><span class="SRQ-letter">B</span><span class="SRQ-text">Dolphin</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-11" value="C"><span class="SRQ-letter">C</span><span class="SRQ-text">Eyes</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-11" value="D"><span class="SRQ-letter">D</span><span class="SRQ-text">Tower</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-11" value="E"><span class="SRQ-letter">E</span><span class="SRQ-text">None of the above</span></label>
  </fieldset>
  <p class="SRQ-feedback" aria-live="polite"></p>
</div>

<div class="SRQ-question" data-answer="A">
  <div class="SRQ-question-header">
    <span class="SRQ-num">12</span>
    <p class="SRQ-prompt">You Got This!</p>
  </div>
  <fieldset class="SRQ-options">
    <legend class="visually-hidden">Question 12 options</legend>
    <label class="SRQ-option"><input type="radio" name="srq-12" value="A"><span class="SRQ-letter">A</span><span class="SRQ-text">B</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-12" value="B"><span class="SRQ-letter">B</span><span class="SRQ-text">A</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-12" value="C"><span class="SRQ-letter">C</span><span class="SRQ-text">D</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-12" value="D"><span class="SRQ-letter">D</span><span class="SRQ-text">C</span></label>
    <label class="SRQ-option"><input type="radio" name="srq-12" value="E"><span class="SRQ-letter">E</span><span class="SRQ-text">E</span></label>
  </fieldset>
  <p class="SRQ-feedback" aria-live="polite"></p>
</div>

</div>
</div>

</div>

<div class="SRQ-hint">
  <button type="button" class="SRQ-hint-toggle" aria-expanded="false">
    <span class="SRQ-hint-label">Editor's Hint</span>
    <span class="SRQ-hint-icon" aria-hidden="true">+</span>
  </button>
  <div class="SRQ-hint-panel" hidden>
    Editor's Hint: Questions 3, 5, and 6 provide some of the earliest footholds in the puzzle.
  </div>
</div>


<div class="SRQ-solution">
  <button type="button" class="SRQ-solution-toggle" aria-expanded="false">
    <span class="SRQ-solution-label">Spoiler Edition (Answers)</span>
    <span class="SRQ-solution-icon" aria-hidden="true">+</span>
  </button>
  <div class="SRQ-solution-panel" hidden>
  Editorial Warning: Reading further may significantly reduce your sense of accomplishment.
    <ol class="SRQ-solution-list">
      <li>A</li>
      <li>A</li>
      <li>D</li>
      <li>A</li>
      <li>A</li>
      <li>D</li>
      <li>B</li>
      <li>C</li>
      <li>D</li>
      <li>D</li>
      <li>D</li>
      <li>A</li>
    </ol>
  </div>
</div>

</div>
