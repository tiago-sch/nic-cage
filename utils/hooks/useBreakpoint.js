import { useState, useEffect } from 'react';
import { inRange, throttle } from 'lodash';
import { breakpoints } from '../../styles/constants/breakpoints';

const getDeviceBreakpoint = width => {
  return ({
    isDesktop: width > breakpoints.lg,
    isTablet: inRange(width, breakpoints.md, breakpoints.lg),
    isMobile: inRange(width, 0, breakpoints.md),
    isMobileOrTablet: inRange(width, 0, breakpoints.lg),
  });
}

/**
 * useBreakpoint - returns window breakpoints
 * @return {object} breakpoint object
 * @property {boolean} isDesktop - is the current screen width in Desktop breakpoint?
 * @property {boolean} isTablet - is the current screen width in Tablet breakpoint?
 * @property {boolean} isMobile - is the current screen width in Mobile breakpoint?
 * @property {boolean} isMobileOrTablet - is the current screen width in Mobile and Tablet breakpoint?
 */
const useBreakpoint = () => {
  const firstValue = process.browser ? window.innerWidth : 0;
  const [breakpoint, setBreakpoint] = useState(() => getDeviceBreakpoint(firstValue));

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBreakpoint(getDeviceBreakpoint(window.innerWidth))
    }, 200);

    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
