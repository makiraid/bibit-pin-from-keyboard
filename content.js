'use strict'

function handleNumericInput() {
	document.addEventListener('keydown', ({ key }) => {
		const targetElement = document.querySelector('.bit-container-padding-horizontal.bit-link-new-pin-container')
		if (!targetElement) return

		const isNumKey = /^\d$/.test(key) // 0-9
		const isDelKey = ['Backspace', 'Delete'].includes(key)

		// Create a mapping for button selectors
		const buttonSelectors = {
			num: `[data-testid="num-${key}"]`,
			delete: '[data-testid="delete-pin"]',
		}

		if (isNumKey) clickButton(buttonSelectors.num)

		if (isDelKey) clickButton(buttonSelectors.delete)
	})
}

function clickButton(selector) {
	const button = document.querySelector(selector)

	if (button) button.click()
}

handleNumericInput()
