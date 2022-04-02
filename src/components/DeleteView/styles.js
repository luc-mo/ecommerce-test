import styled from 'styled-components';
import * as S from 'components/styles';

export const DeleteBlur = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 500;
`;

export const DeleteBox = styled.div`
  background-color: #ffffff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 4px;
  z-index: 1000;
  transform: translate(-50%, -50%);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const DeleteOK = styled(S.WhiteButton)`
  width: 100px;
  height: 40px;
  font-size: 16px;
`;

export const DeleteCancel = styled(S.GreenButton)`
  width: 100px;
  height: 40px;
  font-size: 16px;
`;