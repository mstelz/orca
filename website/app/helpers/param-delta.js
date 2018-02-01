import { helper } from '@ember/component/helper';

export function paramDelta([type, params]/*, hash*/) {
  let vals = [];
  for (let prop in params) {
    if(params[prop][type] != undefined){
      vals.push(params[prop][type]);
    }
  }

  let delta = vals[0];

  for (let i = 1; i < vals.length; i++){
    delta = delta - vals[i];
  }

  // Percent change (would need logic for starting value of 0)
  //delta = delta / vals[0] * 100; 
  delta = delta ? Number(delta*-1).toFixed(2) : "-"; // Format the number to 2 decimal fixed or - for undefined
  let color = delta >= 0 ? "axp" : delta != "-" ? "axs" : ""; // Highlight based on positive or negative
  delta = delta > 0 ? "+" + delta : delta; // Add + for positive numbers
  
  return `<span class='${color}'>${delta}</span>`;
}

export default helper(paramDelta);
