import Ember from 'ember';
import {
	helper
} from '@ember/component/helper';


export function getProperty([
	object,
	property
]) {
	return object[property];
}

export default helper(getProperty);