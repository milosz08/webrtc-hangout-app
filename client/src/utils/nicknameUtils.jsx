'use strict';

import { UniqueOTP } from 'unique-string-generator';

export const generateDefaultNickname = () => {
  return `Guest${UniqueOTP(5)}`;
};
