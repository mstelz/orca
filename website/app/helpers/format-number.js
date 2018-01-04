import {
	helper
} from '@ember/component/helper';

export function formatNumber(params /*, hash*/ ) {
	return Number(params[0]).toFixed(params[1]);
}

export default helper(formatNumber);