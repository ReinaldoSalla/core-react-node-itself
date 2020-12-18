import { config } from 'react-spring';

const getHoverAnimation = (isHovering: boolean): any => ({
  config: isHovering
    ? { mass: 1, tension: 140, friction: 26 }
    : {
      mass: 2, tension: 140, friction: 26, clamp: true
    },
  from: { width: '0%' },
  to: async (next: any): Promise<void> => {
    await next({ width: isHovering ? '25%' : '0%' });
  }
});

const getSvgAnimation = (isTopbarSidebarVisible: boolean): any => ({
  config: config.slow,
  from: { transform: 'rotate(0deg)' },
  to: async (next: any): Promise<void> => {
    await next({
      transform: isTopbarSidebarVisible
        ? 'rotate(180deg)'
        : 'rotate(0deg)'
    });
  }
});

export {
  getHoverAnimation,
  getSvgAnimation
};