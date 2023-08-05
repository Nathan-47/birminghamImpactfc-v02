import styled from 'styled-components';

export const FormContainer = styled.div `
width: 50%;
margin: 30px auto;
border-radius: 5px;
text-align: left;
font-size: 0.9rem;
border: 3px solid black;
padding: 20px;
text-align: center;


@media screen and (max-width: 1024px) {width: 80%;}

@media screen and (max-width: 900px) {width: 80%;}

@media screen and (max-width: 800px) {width: 80%;}

@media screen and (max-width: 480px) { width: 100%;}
`