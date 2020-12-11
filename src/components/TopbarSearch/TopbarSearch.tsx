import React, { useState, useRef, useContext, FunctionComponent } from 'react';
import { 
  useSpring, 
  useTransition, 
  useChain
} from 'react-spring';
import { getSpring, getTransitions } from './TopbarSearch.animations';
import SearchWrapper from './TopbarSearch.styles';
import SearchTitle from '../SearchTitle';
import TopbarSearchInput from '../TopbarSearchInput';
import TopbarSearchExit from '../TopbarSearchExit';
import { ModalsState } from '../../shared/context/ModalsContext';
import { ModalsDispatch } from '../../shared/context/ModalsContext';

const components = [SearchTitle, TopbarSearchInput, TopbarSearchExit];

const indexedComponents = components.map((component, key) => ({
  component,
  key
}));

const TopbarSearch: FunctionComponent = (): JSX.Element => {
  const [text, setText] = useState('');
  const springRef: any = useRef();
  const transitionsRef: any = useRef();
  const timeoutId = useRef<any>(null);

  const { isTopbarSearchVisible } = useContext(ModalsState);

  const dispatch = useContext(ModalsDispatch);

  const toggleTopbarSearch = () => {
    dispatch({ type: 'TOGGLE_TOPBAR_SEARCH' });
  };

  const spring = useSpring(getSpring(isTopbarSearchVisible, springRef));

  const transitions = useTransition(
    isTopbarSearchVisible ? indexedComponents : [], 
    (item) => item.key,
    getTransitions(isTopbarSearchVisible, transitionsRef, indexedComponents.length)
  );

  useChain(
    isTopbarSearchVisible ? [springRef, transitionsRef] : [transitionsRef, springRef],
    [0, isTopbarSearchVisible ? 0.3 : 0.5]
  );

  const onFocus = () => {
    clearTimeout(timeoutId.current);
  };

  const onBlur = () => {
    timeoutId.current = setTimeout(() => {
      toggleTopbarSearch();
    });
  }; 

  return (
    <SearchWrapper 
      style={spring} 
      $scroll={text.length > 0}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {transitions.map(({ item, key, props }) => (
        <item.component 
          style={props} 
          key={key} 
          toggleTopbarSearch={toggleTopbarSearch}
          text={text}
          setText={setText}
        />
      ))}
    </SearchWrapper>
  );
};

export default TopbarSearch;