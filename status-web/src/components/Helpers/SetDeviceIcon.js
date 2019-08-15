/**
 * SetDeviceIcon takes a string 'status'
 * The function is used to set the appropriate icon for the given module/device
 * Is only used in ModuleListComponent for the moment
 */
import React from 'react';

import DeleteSweep from '@material-ui/icons/DeleteSweep';
import CameraAlt from '@material-ui/icons/CameraAlt';
import Ballot from '@material-ui/icons/Ballot';
import Dvr from '@material-ui/icons/Dvr';
import Camera from '@material-ui/icons/Camera';
import BarChart from '@material-ui/icons/BarChart';
import Send from '@material-ui/icons/Send';
import AssignmentLate from '@material-ui/icons/AssignmentLate';
import Clear from '@material-ui/icons/Clear';


export function SetDeviceIcon(status) {
  switch (status) {
    case 'Cleaning':
      return <DeleteSweep style={{ fontSize: 15, marginRight: 4 }} />;
    case 'RightCamera1':
      return <CameraAlt style={{ fontSize: 15, marginRight: 4 }} />;
    case 'RightCamera2':
      return <CameraAlt style={{ fontSize: 15, marginRight: 4 }} />;
    case 'LeftCamera1':
      return <CameraAlt style={{ fontSize: 15, marginRight: 4 }} />;
    case 'LeftCamera2':
      return <CameraAlt style={{ fontSize: 15, marginRight: 4 }} />;
    case 'CowHandler':
      return <Ballot style={{ fontSize: 15, marginRight: 4 }} />;
    case 'SystemStatusHandler':
      return <Dvr style={{ fontSize: 15, marginRight: 4 }} />;
    case 'CaffeDetection':
      return <Camera style={{ fontSize: 15, marginRight: 4 }} />;
    case 'Statistics':
      return <BarChart style={{ fontSize: 15, marginRight: 4 }} />;
    case 'StatusSender':
      return <Send style={{ fontSize: 15, marginRight: 4 }} />;
    case 'IdModule1':
      return <AssignmentLate style={{ fontSize: 15, marginRight: 4 }} />;
    default:
      return <Clear style={{ fontSize: 15, marginRight: 4 }} />;
  }
}
