
import { results } from './results';

const siteStatusOrder = [results.ERROR, results.WARNING, results.OK];
const cowListOrder = [results.OBS, results.TREATMENT, results.TOTAL];
const cameraOrder = ['LeftCamera1', 'RightCamera1', 'LeftCamera2', 'RightCamera2'];
const modulesOrder = [
  'NoDevice',
  'LeftCamera1',
  'RightCamera1',
  'LeftCamera2',
  'RightCamera2',
  'Cleaning',
  'CowHandler',
  'SystemStatusHandler',
  'CaffeDetection',
  'Statistics',
  'StatusSender',
  'IdModule1',
];
export {
  siteStatusOrder,
  cowListOrder,
  cameraOrder,
  modulesOrder,
};
