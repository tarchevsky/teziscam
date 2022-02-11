window.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.sites__tab'),
			tabsContent = document.querySelectorAll('.sites__descr'),
			tabsParent = document.querySelector('.sites__tabs');

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.style.display = 'none';
		});
		tabs.forEach(item => {
			item.classList.remove('sites__tab--active');
		});
	}
	function showTabContent(i = 0) {
		tabsContent[i].style.display = 'block';
		tabs[i].classList.add('sites__tab--active');
	}
	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;
		
		if(target && target.classList.contains('sites__tab')) {
			tabs.forEach((item, i) => {
				if(target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});
});
