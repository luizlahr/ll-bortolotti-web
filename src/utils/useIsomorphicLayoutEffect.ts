import { useLayoutEffect, useEffect as ReactUseEffect } from 'react';
const useEffect =
  typeof window !== 'undefined' ? useLayoutEffect : ReactUseEffect;
export default useEffect;