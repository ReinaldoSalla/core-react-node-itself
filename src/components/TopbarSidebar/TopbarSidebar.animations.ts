const getHoverAnimation = (isHovering) => ({
  config: isHovering
    ? { mass: 1, tension: 140, friction: 26 }
    : { mass: 2, tension: 140, friction: 26 , clamp: true },
  from: { width: '0%' },
  to: async (next) => {
    await next({ width: isHovering ?  '34%' : '0%' });
  }
});

const getSvgAnimation = (isSidebarVisible) => ({
  config: { mass: 1, tension: 240, friction: 60 },
  from: { transform: 'rotate(0deg)' },
  to: async (next) => {
    await next({
      transform: isSidebarVisible ? 'rotate(180deg)' : 'rotate(0deg)',
    });
  },
});

export { getHoverAnimation, getSvgAnimation };