import {
	helper
} from '@ember/component/helper';


export function getProperty([
	object,
	property
]) {
	return object[property] ? object[property] : '-';
}

export default helper(getProperty);