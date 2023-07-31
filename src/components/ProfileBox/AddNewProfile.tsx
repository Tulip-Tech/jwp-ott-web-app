import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import styles from './ProfileBox.module.scss';

import Plus from '#src/icons/Plus';

type Props = {
  onClick: () => void;
};

const AddNewProfile = ({ onClick }: Props) => {
  const { t } = useTranslation('user');
  return (
    <div onClick={onClick} className={classNames(styles.wrapper, styles.addProfileContainer)}>
      <div className={styles.iconContainer}>
        <div className={`${styles.box} ${styles.circle}`}>
          <Plus />
        </div>
      </div>
      <h2 className={styles.title}>{t('account.add_profile')}</h2>
    </div>
  );
};

export default AddNewProfile;
