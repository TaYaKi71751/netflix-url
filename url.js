
(async () => {
	const setUrl = async () => {
		if(!document.location.pathname.startsWith('/browse')) return;
		let jbv = undefined;
		// https://stackoverflow.com/questions/824349/how-do-i-modify-the-url-without-reloading-the-page
		(new URL(document.location)).searchParams.forEach((value,key) => {
			if(key == 'jbv'){
				jbv = value;
			}
		});
		if(jbv == undefined || !jbv.length) return;
		window.history.pushState('', '', `/us/title/${jbv}`);
	};
			const events = Object.keys(document.__proto__.__proto__).reduce((arr, event)=> { // https://stackoverflow.com/questions/39963850/how-can-i-add-an-event-listener-for-all-events-in-javascript-without-listing-the
				if(event.startsWith('on')) return [...arr, event.substr(2)];
				return arr;
			}, []);
				events.forEach(async (event) => {
					document.addEventListener(event,setUrl);
				});
				setUrl();
		})();
