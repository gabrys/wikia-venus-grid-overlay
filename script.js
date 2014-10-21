if (document.readyState === 'complete' || document.readyState === 'loaded' || document.readyState === 'interactive') {
	if (!firstRun) {
		var firstRun = true,
				columnHtml = '<div class=\"column border-box\"><div class=\"column-content border-box\"></div></div>',
				gutterHtml = '<div class=\"gutter border-box\"></div>',
				warpperHtml = '',
				wrapper = document.createElement('div'),
				wikiaPage,
				i;

		wrapper.className = 'debug-grid-overlay border-box';

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

