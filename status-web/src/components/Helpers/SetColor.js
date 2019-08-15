/**
 * SetColor takes a string 'evaluation' which is an evaluation result
 * The function is used to set the colors of borders, backgrounds, text etc...
 */
import { BASE_COLORS } from '../../constants/colors';
import { results } from '../../constants/results';

export function SetColor(evaluation) {
  if (evaluation === results.OK) {
    return BASE_COLORS.ok;
  } if (evaluation === results.ERROR) {
    return BASE_COLORS.error;
  }
  return BASE_COLORS.warning;
}
