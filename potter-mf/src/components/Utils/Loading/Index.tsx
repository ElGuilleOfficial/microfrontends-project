import { SpinnerWrapper, Spinner } from './styles';

const LoadingSpinner = () => (
  <SpinnerWrapper data-testid="loading-spinner">
    <Spinner />
  </SpinnerWrapper>
);

export default LoadingSpinner;