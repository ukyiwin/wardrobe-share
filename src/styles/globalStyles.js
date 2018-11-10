import { colors, margin } from './theme';

export const disabled = `
  opacity: 0.2;
  cursor: default;
`;

export const clickable = `
  opacity: 0.6;
  cursor: pointer;
    
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`;

export const button = `
  display: inline-block;
  margin: ${margin.half} 0;
  padding: 0.3rem 0.8rem;
  border: 2px solid;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  border-color: ${colors.orange};
  ${clickable}
`;

export const fade = `
  &.fade-enter {
    opacity: 0.01;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0.01;
    transition: opacity 200ms ease-in;
  }
`;
