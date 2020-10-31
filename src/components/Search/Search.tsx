import React, { useRef, FunctionComponent } from 'react';
import { 
  useSpring, 
  useTransition, 
  useChain, 
  config, 
  animated
} from 'react-spring';
import { SearchProps } from './Search.types';
import { 
  SearchWrapper,
  SearchContainer,
  SearchTitle,
  SearchInput 
} from './Search.styles';

let rawItems = [
  ({ style }) => <SearchTitle style={style}>Searh anything</SearchTitle>,
  ({ style }) => <SearchInput style={style} type='text' placeholder='e.g. GraphQL' />,
];

const items = rawItems.map((item, index) => ({
  component: item,
  key: index
}));

const Search: FunctionComponent<SearchProps> = ({
  isSearchActive,
  toggleSearch
}): JSX.Element => {
  const springRef: any = useRef();
  const transitionsRef: any = useRef();

  const spring = useSpring({
    ref: springRef,
    from: {
      height: isSearchActive ? '800px' : '0px'
    },
    to: async (next) => {
      await next({
        height: isSearchActive ? '800px' : '0px',
      });
    },
  });

  const transitions = useTransition(
    isSearchActive ? items : [], 
    item => item.key,
    {
      ref: transitionsRef,
      unique: true,
      trail: 500 / items.length,
      from: { opacity: 0, transform: 'scale(0.5)', },
      enter: { opacity: 1, transform: 'scale(1)', },
      leave: { opacity: 0, transform: 'scale(0.9)', },
    }
  );

  useChain(
    isSearchActive ? [springRef, transitionsRef] : [transitionsRef, springRef],
    [0, 0.3]
  );

  return (
    <SearchWrapper style={spring}>
      <SearchContainer>
        {transitions.map(({ item, key, props }) => (
          <item.component style={props} key={key} />
        ))}
      </SearchContainer>
    </SearchWrapper>
  );
};

export default Search;