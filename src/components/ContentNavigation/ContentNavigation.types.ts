interface ContentNavigationProps {
  isIntroIntersecting: boolean;
  isSetupIntersecting: boolean;
  isJsxIntersecting: boolean
  isStylingIntersecting: boolean
  isUseStateIntersecting: boolean
  isUseReducerIntersecting: boolean
  isFinalCodeIntersecting: boolean
  scrollToIntro: () => void
  scrollToSetup: () => void
  scrollToJsx: () => void
  scrollToStyling: () => void
  scrollToUseState: () => void
  scrollToUseReducer: () => void
  scrollToFinalCode: () => void
}

export type { ContentNavigationProps };