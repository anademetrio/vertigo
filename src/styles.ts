import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    width: 100vw;
    height: 100vh;
`

export const Content = styled.div`
    flex-grow: 1;
    width: 50%;
    height: 100%;
`

export const Box = styled(Content)`
    padding: 3rem;
    display: flex;
    justify-content: center;
    align-items: start;
`

export const BoxContent = styled.div`
    width: 100%;
    height: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: start;
    .box-content-body {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    form {
        margin-top: 2rem;
    }
    .info-register a {
        color: #7C3AED;
        text-decoration: none;
        font-weight: bold;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`

export const Title = styled.h1`
    font-weight: 400;
    margin-bottom: 8px;
    font-weight: bold;
    color: #0F172A;
    font-size: 2.25rem;
`

export const Space = styled.div<{ size?: number }>`
    display: block;
    height: ${({size}) => size ? `${size}rem` : '1rem'};
`