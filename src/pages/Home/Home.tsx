import React, {
  useEffect,
  useContext,
  useRef,
  useCallback,
  FunctionComponent
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSpring } from 'react-spring';
import Container from './Home.styles';
import Carousel from '../../components/Carousel';
import Categories from '../../components/Categories';
import scrollToElement from '../../utils/scrollToElement';
// import Background from '../../components/Background';
import getOpacitySpring from '../../shared/animations';
import { ModalsState } from '../../shared/context/ModalsContext';

const Home: FunctionComponent = (): JSX.Element => {
  const domNodes = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null)
  ];

  const { isTopbarSidebarVisible } = useContext(ModalsState);

  const scrollToJavascript = useCallback(() => {
    scrollToElement(domNodes[0], -100);
  }, [domNodes]);

  const scrollToReact = useCallback(() => {
    scrollToElement(domNodes[1], -100);
  }, [domNodes]);

  const scrollToNode = useCallback(() => {
    scrollToElement(domNodes[2], -100);
  }, [domNodes]);

  const scrolls = [scrollToJavascript, scrollToReact, scrollToNode];

  const { hash } = useLocation();

  // useEffect(() => {
  //   window.onbeforeunload = (): void => {
  //     if (!hash) {
  //       window.scroll(0, 0);
  //     }
  //   };
  // }, [hash]);

  useEffect(() => {
    if (hash === '#javascript') {
      scrollToJavascript();
    } else if (hash === '#react') {
      scrollToReact();
    } else if (hash === '#node') {
      scrollToNode();
    }
  }, [hash, scrollToJavascript, scrollToNode, scrollToReact]);

  const spring = useSpring(getOpacitySpring(isTopbarSidebarVisible));

  return (
    <>
      <Container
        style={spring}
        $isTopbarSidebarVisible={isTopbarSidebarVisible}
        $fixedHeight
      >
        {/* <Background videoDomNode={null}/> */}
        <Carousel scrolls={scrolls} />
      </Container>
      <Container
        style={spring}
        $isTopbarSidebarVisible={isTopbarSidebarVisible}
      >
        <Categories domNodes={domNodes} />
      </Container>
    </>
  );
};

export default Home;