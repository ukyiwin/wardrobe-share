import { fonts, colors } from './styles/theme.js';

export const tertiaryfont = `
  margin: 0.5em 0 0.5em;
  color: grey;
`;

export const flexRow = `
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
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
