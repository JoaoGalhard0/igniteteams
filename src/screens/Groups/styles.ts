import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    background-Color: ${({ theme }) => theme.COLORS.GRAY_600};
    align-Items: center;
    justify-Content: center;
`

export const Title = styled.Text`
    color: #fff;
    font-size: 32px;
`