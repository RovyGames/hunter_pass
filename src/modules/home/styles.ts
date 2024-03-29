import { Element } from 'react-scroll';
import styled from '../../theme';

export const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
`;
export const FixedContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HomeItemCentered = styled(Element)`
  min-height: 700px;
  display: flex;
  flex-direction: column;
`;
