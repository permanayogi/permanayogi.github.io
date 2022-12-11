/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
			tabsContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
			const target = document.querySelector(tab.dataset.target)

			tabsContents.forEach(tc => {
				tc.classList.remove('filters__active')
			})
			target.classList.add('filters__active')

			tabs.forEach(t => {
				t.classList.remove('filter-tab-active')
			})
			tab.classList.add('filter-tab-active')
	})
})
/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
