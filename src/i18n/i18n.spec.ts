import { expect, test } from 'vitest';
import en from './en.json';
import fr from './fr.json';

test.each([{ lang_left: en, lang_left_label: 'en', lang_right: fr, lang_right_label: 'fr' }])(
	'translation structure matches: "$lang_left" against "$lang_right"',
	({ lang_left, lang_right, lang_left_label, lang_right_label }) => {
		let removeTextValues1 = removeTextValues(lang_left);
		let removeTextValues2 = removeTextValues(lang_right);
		expect(
			removeTextValues1,
			`i18n file structure is different between "${lang_left_label}" and "${lang_right_label}"`
		).toStrictEqual(removeTextValues2);
	}
);

test('utility to remove text value and keep only structure', () => {
	const foo = {
		foo: 'bar',
		header: {
			project: 'The project',
			values: 'Our values',
			faq: 'FAQ',
			support: 'Support',
			training: 'Training',
			inspire: 'Inspire',
			about: 'About us'
		},
		about: {
			title: 'About us'
		}
	};

	expect(removeTextValues(foo)).toStrictEqual({
		foo: '',
		header: {
			project: '',
			values: '',
			faq: '',
			support: '',
			training: '',
			inspire: '',
			about: ''
		},
		about: {
			title: ''
		}
	});
});

function removeTextValues(anObject: Object) {
	if (typeof anObject === 'object') {
		let result = {};
		Object.entries(anObject).forEach((entry) => {
			const key = entry[0];
			const value = removeTextValues(entry[1]);
			result = { ...result, [key]: value };
		});
		return result;
	}
	return '';
}
