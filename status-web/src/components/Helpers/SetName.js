/**
 * SetName takes a string 'name'
 * The function is used to convert the given module/device name depending on set language
 */
import { useTranslation } from 'react-i18next';

const SetName = (props) => {
  const {
    name,
  } = props;
  const { t } = useTranslation();
  switch (name) {
    case 'NetTimeResult':
      return t('names:NetTimeResult');
    case 'SyncDiff':
      return t('names:SyncDiff');
    case 'MilkReportTime':
      return t('names:MilkReportTime');
    case 'LatestIdBlobTime':
      return t('names:LatestIdBlobTime');
    case 'NumberOfIdBlobsLastMilking':
      return t('names:NumberOfIdBlobsLastMilking');
    case 'LatestSuccessfulCowTime':
      return t('names:LatestSuccessfulCowTime');
    case 'NumberOfCowsLastMilking':
      return t('names:NumberOfCowsLastMilking');
    case 'CleaningPingResult':
      return t('names:CleaningPingResult');
    case 'EmptyDriveSpaceInBytes':
      return t('names:EmptyDriveSpaceInBytes');
    case 'LatestTreatmentSyncTime':
      return t('names:LatestTreatmentSyncTime');
    case 'MilkTimesUsed':
      return t('names:MilkTimesUsed');
    case 'LastestDairySyncTime':
      return t('names:LastestDairySyncTime');
    case 'LastPanolaConfigBackup':
      return t('names:LastPanolaConfigBackup');
    case 'TimezoneId':
      return t('names:TimezoneId');
    case 'cameraPingWraper':
      return t('names:cameraPingWraper');
    case 'Obs':
      return t('names:Obs');
    case 'Treatment':
      return t('names:Treatment');
    case 'Total':
      return t('names:Total');
    case 'moduleStatusWraper':
      return t('names:moduleStatusWraper');
    case 'measurementWraper':
      return t('names:measurementWraper');
    case 'NoDevice':
      return t('names:NoDevice');
    case 'RightCamera1':
      return t('names:RightCamera1');
    case 'RightCamera2':
      return t('names:RightCamera2');
    case 'LeftCamera1':
      return t('names:LeftCamera1');
    case 'LeftCamera2':
      return t('names:LeftCamera2');
    case 'Cleaning':
      return t('names:Cleaning');
    case 'CowHandler':
      return t('names:CowHandler');
    case 'SystemStatusHandler':
      return t('names:SystemStatusHandler');
    case 'CaffeDetection':
      return t('names:CaffeDetection');
    case 'Statistics':
      return t('names:Statistics');
    case 'StatusSender':
      return t('names:StatusSender');
    case 'IdModule1':
      return t('names:IdModule1');
    default:
      return t('names:convError');
  }
};
export default SetName;
