import styled from "styled-components";

export const FormGroup = styled.div`
    margin-bottom: 1rem;
`
export const FormControl = styled.div`
    display: flex;
    align-items: center;
    height: 53px;
    border-radius: 4px;
    border: 1px solid #E2E8F0;
    overflow: hidden;
    padding: 0 1rem;
    background-color: white;
    input {
        padding: 0;
        width: 100%;
        height: 100%;
        border: none;
        &::placeholder {
            color: #94A3B8;
        }
    }
    .icon {
        color: #94A3B8;
        cursor: pointer;
    }
`
export const Hint = styled.span`
    font-size: .875rem;
    color: #ED3A5A;
`
export const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .25rem;
    font-size: .875rem;
    color: #1E293B;
    font-weight: 600;

    a {
        color: #7C3AED;
        text-decoration: none;
    }
`