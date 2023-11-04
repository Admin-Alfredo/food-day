import styled from "styled-components";

export const Container = styled.div`
    display: flex;

`
const Chevron = styled.div`
    background-color: #eee;
    width: 50px;
    height: 80px;
    border-radius: 15px;
    color: #1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background ease .2s;
    &:hover{
        background-color: #ddd;
    }
`

export const WpCalendar = styled.div`
    height: 300px;
    width: 240px;
`
export const WpInformation = styled.div`
    display: flex;
    flex-direction: column;
`
export const WpDate = styled.div`

`
export const InfoDate = styled.div`
    display: flex;
    align-items: center;
    font-size: 2.1rem;
    margin: 0 15px;
`
export const WpInfoDate = styled.div`
    height: 80px;
    display: flex;
`
export const WpChevronLeft = styled(Chevron)`

`
export const WpChevronRight = styled(Chevron)`

`

export const OthersInfo = styled.div`
    margin-top: 15px;
    & > ul{
        list-style: none;
    }
`