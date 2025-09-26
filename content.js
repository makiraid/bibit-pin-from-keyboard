'use strict'

/**
 * This script adds keyboard controls to an on-screen PIN pad.
 * - Digits 0-9 for number input.
 * - Enter to submit.
 * - Backspace/Delete to clear the last digit.
 */
function handlePinPadInput(event) {
  const key = event.key;

  if (key >= '0' && key <= '9') {
    const numButton = document.querySelector(`[data-testid="num-${key}"]`);
    if (numButton) numButton.click();
    return;
  }

  if (key === 'Enter') {
    const submitButton = document.querySelector('button[data-content="Lanjut"]');
    if (submitButton) submitButton.click();
    return;
  }

  if (key === 'Backspace' || key === 'Delete') {
    const deleteButton = document.querySelector('[data-testid="delete-pin"]');
    if (deleteButton) deleteButton.click();
    return;
  }
}

document.addEventListener('keydown', handlePinPadInput);