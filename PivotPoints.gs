/**
*
* Calculates PivotPoints from High, Low and Close Quotes
* For more information, please see https://www.babypips.com/learn/forex/how-to-calculate-pivot-points
*
* @param {number} high The Prior Period's High
* @param {number} low The Prior Period's Low
* @param {number} close The Prior Period's Close 
* @param {"PP"} pivotPoint The PivotPoint to be returned {"R3","R2","R1","PP","S1","S2","S3"}
* @returns The PivotPoint Selected Given the Inputs to the Calculation
* @customfunction
*/

function PIVOTPOINTS(high, low, close, pivotPoint) {

  var PP = (high + low + close) / 3;
  var R3 = high + (2 * (PP - low));
  var R2 = PP + (high - low);
  var R1 = (2 * PP) - low;
  var S1 = (2 * PP) - high;
  var S2 = PP - (high - low);
  var S3 = low - (2 * (high - PP));
  
  if (pivotPoint == 'R3') {return R3;}
  if (pivotPoint == 'R2') {return R2;}
  if (pivotPoint == 'R1') {return R1;}
  if (pivotPoint == 'PP') {return PP;}
  if (pivotPoint == 'S1') {return S1;}
  if (pivotPoint == 'S2') {return S2;}
  if (pivotPoint == 'S3') {return S3;}
}
