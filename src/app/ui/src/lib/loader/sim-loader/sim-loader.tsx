import React, { FC } from 'react';
import { Typography, useTheme } from '@mui/material';

import styles from './sim-loader.module.scss';

export const SimLoader: FC = () => {
  const theme = useTheme();

  return (
    <div className={styles['loader']}>
      <div className={styles['sim-shape']}>
        <div className={styles['sim-shape2']}>
          <div className={styles['sim__dot']} />
          <div className={styles['sim__box-wrapper']}>
            <div className={styles['wrapper']}>
              <div className={(styles['box'], styles['a'])} />
              <div className={(styles['box'], styles['b'])} />
              <div className={(styles['box'], styles['c'])} />
              <div className={(styles['box'], styles['d'])} />
              <div className={(styles['box'], styles['e'])} />
              <div className={(styles['box'], styles['f'])} />
              <div className={(styles['box'], styles['g'])} />
            </div>
          </div>
          <div className={styles['water-effect']}>
            <div className={styles['waves']} />
            <div className={styles['water']} />
          </div>
        </div>
      </div>
      <Typography color={theme.colors.alpha.black[100]}>Loading...</Typography>
    </div>
  );
};

export default SimLoader;
