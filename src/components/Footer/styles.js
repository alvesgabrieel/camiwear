import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const FooterContent = styled.div`
    border-bottom: 1px solid ${colors.grey};
`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    gap: 80px;
    margin-bottom: 100px;

    h4{
        font-size: 14px;
        margin-bottom: 8px;
        margin-top: 16px;
    }

    p{
        font-size: 12px;
        color: ${colors.lightgrey};
        margin-bottom: 16px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`