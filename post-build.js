/* eslint-disable no-console */
const replace = require('replace-in-file');

(async function() {
	//change title
	const titleChange = {
		files: './storybook-static/*.html',
		from: '<title>Storybook</title>',
		to: '<title>Liquid UI</title>'
	};

	await replace(titleChange)
		.then(results => {
			console.log('Replacement results:', results);
		})
		.catch(error => {
			console.error('Error occurred:', error);
		});

	const jsTitleChange = {
		files: './storybook-static/**/*.js',
		from: 'document.title=',
		to: 'document.title= "Liquid UI" ||'
	};

	await replace(jsTitleChange)
		.then(results => {
			console.log('Replacement results:', results);
		})
		.catch(error => {
			console.error('Error occurred:', error);
		});

	// change story
	const jsChange = {
		files: './storybook-static/**/*.js',
		from: 'title:"About your Storybook"',
		to: 'title:"Powered by Storybook"'
	};

	await replace(jsChange)
		.then(results => {
			console.log('Replacement results:', results);
		})
		.catch(error => {
			console.error('Error occurred:', error);
		});

	// name change
	const jsBrandTitleChange = {
		files: './storybook-static/**/*.js',
		from: '"Storybook"',
		to: '"Liquid UI"'
	};

	await replace(jsBrandTitleChange)
		.then(results => {
			console.log('Replacement results:', results);
		})
		.catch(error => {
			console.error('Error occurred:', error);
		});

	//hide logos
	const logos = {
		files: './storybook-static/**/*.js',
		from: '"Storybook "',
		to: '"Liquid UI "'
	};

	await replace(logos)
		.then(results => {
			console.log('Replacement results:', results);
		})
		.catch(error => {
			console.error('Error occurred:', error);
		});
})();
