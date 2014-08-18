if (document.readyState === 'complete' || document.readyState === 'loaded' || document.readyState === 'interactive') {
	if (!firstRun) {
		var firstRun = true,
				columnHtml = '<div class=\"column\"><div class=\"column-content\"></div></div>',
				gutterHtml = '<div class=\"gutter\"></div>',
				warpperHtml = '',
				wrapper = document.createElement('div'),
				wikiaPage,
				i;

		wrapper.className = 'debug-grid-overlay';

		for (i = 0; i < 11; i++) {
			warpperHtml += columnHtml + gutterHtml
		}

		warpperHtml += columnHtml;
		wrapper.innerHTML = warpperHtml;
		wikiaPage = document.getElementsByClassName('wikia-page')[0];

		if (wikiaPage) {
			wikiaPage.appendChild(wrapper)
		}
	}

	if (wrapper.style.visibility === 'visible') {
		wrapper.style.visibility = 'hidden';
	} else {
		wrapper.style.visibility = 'visible';
	}
}

