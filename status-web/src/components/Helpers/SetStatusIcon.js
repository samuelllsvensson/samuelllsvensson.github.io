/**
 * SetStatusIcon takes a string 'status' which is an evaluation result
 * The function is used to set the status icon depending on given evaluation status
 * Is used in CameraPing, CowList and StaticComponent for the moment
 */
import React from 'react';

import Public from '@material-ui/icons/Public';
import AccessTime from '@material-ui/icons/AccessTime';
import WifiTethering from '@material-ui/icons/WifiTethering';
import PortableWifiOff from '@material-ui/icons/PortableWifiOff';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import Add from '@material-ui/icons/Add';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';

import { BASE_COLORS } from '../../constants/colors';
import { results } from '../../constants/results';


export function SetStatusIcon(status) {
  switch (status) {
    case results.SUCCESS:
      return BASE_COLORS.ok;
    case results.OBS:
      return <ErrorOutline style={{ color: 'primary', fontSize: 30 }} />;
    case results.TREATMENT:
      return <Add style={{ color: 'primary', fontSize: 30 }} />;
    case results.TOTAL:
      return <PlaylistAddCheck style={{ color: 'primary', fontSize: 30 }} />;
    case results.OK:
      return <WifiTethering style={{ color: BASE_COLORS.ok, fontSize: 25 }} />;
    case 'TimezoneId':
      return <Public style={{ fontSize: 20 }} />;
    case 'MilkTimesUsed':
      return <AccessTime style={{ fontSize: 20 }} />;
    default:
      return <PortableWifiOff style={{ color: BASE_COLORS.error, fontSize: 25 }} />;
  }
}
