import styled from 'styled-components';
import SimpleBar from "simplebar-react";
import 'simplebar/dist/simplebar.min.css';

export const Scroll = styled(SimpleBar)`
    max-height: 99.9999999vh;
    overflow-x: hidden;
    scroll-behavior: smooth;
`; 