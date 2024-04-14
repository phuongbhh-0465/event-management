import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 0.5rem;
    display: flex;
    align-items: center;

    .icon {
        font-size: 1rem;
        margin-right: 1rem;
        display: flex;
        align-items: center;
        svg {
            color: var(--grey-400);
        }
    }
    .text {
        text-transform: capitalize;
        letter-spacing: var(--letterSpacing);
        display: inline-block;
        width: 360px;
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
    }
`;
export default Wrapper;
