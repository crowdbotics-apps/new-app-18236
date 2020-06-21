
import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';
import AntIcon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

import { DefaultNavigationProps } from '../../types';
import styles from './styles';
import Button from '../shared/Button';
import { IC_WELCOME_LOGO } from '../../../utils/Icons';
// import { getString } from '../../STRINGS';
// import { useThemeContext } from '../../providers/ThemeProvider';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  background-color: ${({ theme }): string => theme.background};

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

interface Props {
  navigation: DefaultNavigationProps<'Intro'>;
}

function Intro(props: Props): React.ReactElement {
  let swiper: any;

  const render1stPage = (): JSX.Element => {
    return (
      <View style={styles.slideView}>
        <Text style={styles.titleStyle}>
          Welcome
        </Text>
        <Image style={styles.pageIcon}
          resizeMode="contain"
          source={IC_WELCOME_LOGO} />
        <Text style={styles.textStyle}>
          Welcome to Crowdbotics TaskMan
        </Text>
        <Text style={styles.textStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Text>
      </View>
    );
  };

  return (
    <Container>
      <Swiper
        ref={ref => (swiper = ref)}
        loop={false}
        dot={ <View style={styles.swiperDot} /> }
        activeDot={ <View style={styles.swiperActiveDot} /> }>
        {render1stPage()}
      </Swiper>
    </Container>
  );
}

export default Intro;
