import posed from 'react-pose';
import styled from 'styled-components';

const PosedCount = posed.div({
  attention: {
    scale: 1.3,
    fontSize: '1.1rem',
    transition: {
      duration: 200
    }
  },
  normal: {
    fontSize: '1rem',
    scale: 1
  }
});

const StyledCount = styled(PosedCount)`
  display: inline-block;
  height: 1.5rem;
  width: 1.5rem;
  background-color: #f2994a;
  border-radius: 50%;
  text-align: center;
  line-height: 1.5rem;
  color: white;
`;

export default StyledCount;
