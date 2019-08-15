/**
 * CheckIfTimestamp takes a string 'timestamp' which complies to ISO 8601 standard.
 * The function is used to format the timestamp to remove 'T' and also return
 * 'Timestamp missing' if it's a default value.
 */
import moment from 'moment';

import { useTranslation } from 'react-i18next';

const CheckIfTimestamp = (props) => {
  const {
    timestamp,
  } = props;
  const { t } = useTranslation();
  const timestampMissing = t('timestampMissing');
  // Check if given value has the format of a ISO timestamp date
  if (moment(timestamp, 'YYYY-MM-DDTkk:mm:ssZ', true).isValid()) {
    const lastStatus = moment(timestamp).format('YYYY-MM-DD kk:mm:ss');
    return lastStatus;
  }
  if (timestamp === 'NoValue') {
    return timestampMissing;
  }
  return timestamp;
};
export default CheckIfTimestamp;
