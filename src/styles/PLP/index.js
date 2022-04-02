import styled from 'styled-components';
import * as S from 'styles';

export const ProductsList = styled.section`
display: grid;
width: 100%;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 60px;
`;

export const H1 = styled(S.H1)`
margin-bottom: 26px;
`;