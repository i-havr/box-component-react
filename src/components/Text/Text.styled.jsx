import styled from 'styled-components';

export const Text = styled.p`
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m}px;
  /* padding: ${p => p.theme.space[4]}px; */
`;
