import React, { useContext, FunctionComponent } from 'react';
import { useSpring } from 'react-spring';
import {
  CarouselInputWrapper,
  CarouselInputArea,
  CarouselInputButton,
  CarouselInputText,
  CarouselInputInner,
  CarouselInputTimer,
  CarouselInputRow
} from './CarouselInput.styles';
import {
  carouselTimerAnimation,
  carouselTimerOffset,
  getTextProps,
  getInnerProps
} from './CarouselInput.animations';
import { CarouselInputProps } from './CarouselInput.types';
import { ModalsState } from '../../shared/context/ModalsContext';

const CarouselInput: FunctionComponent<CarouselInputProps> = ({
  index,
  handleFirstClick,
  handleSecondClick,
  handleThirdClick
}): JSX.Element => {
  const {
    width,
    opacity
  }: any = useSpring(carouselTimerAnimation);
  const { isTopbarSidebarVisible } = useContext(ModalsState);

  const firstTextAnimation = useSpring(getTextProps(index, 0));

  const secondTextAnimation = useSpring(getTextProps(index, 1));

  const thirdTextAnimation = useSpring(getTextProps(index, 2));

  const firstInnerAnimation = useSpring(getInnerProps(index, 0));

  const secondInnerAnimation = useSpring(getInnerProps(index, 1));

  const thirdInnerAnimation = useSpring(getInnerProps(index, 2));

  return (
    <CarouselInputWrapper>
      <CarouselInputArea>
        <CarouselInputButton onClick={handleFirstClick}>
          <CarouselInputText style={firstTextAnimation}>
            JavaScript
          </CarouselInputText>
          <CarouselInputInner style={firstInnerAnimation} />
        </CarouselInputButton>
        <CarouselInputButton onClick={handleSecondClick}>
          <CarouselInputText style={secondTextAnimation}>
            React
          </CarouselInputText>
          <CarouselInputInner style={secondInnerAnimation} />
        </CarouselInputButton>
        <CarouselInputButton onClick={handleThirdClick}>
          <CarouselInputText style={thirdTextAnimation}>
            Node
          </CarouselInputText>
          <CarouselInputInner style={thirdInnerAnimation} />
        </CarouselInputButton>
      </CarouselInputArea>
      <CarouselInputTimer>
        <CarouselInputRow
          style={{
            width: width.interpolate((currWidth: number) => (
              currWidth < carouselTimerOffset
                ? 0
                : `${currWidth}%`)),
            opacity: opacity.interpolate((currOpacity: number) => (
              currOpacity < carouselTimerOffset / 100
                ? 0
                : currOpacity - carouselTimerOffset / 100)),
            display: isTopbarSidebarVisible ? 'none' : 'block'
          }}
        />
      </CarouselInputTimer>
    </CarouselInputWrapper>
  );
};

export default CarouselInput;