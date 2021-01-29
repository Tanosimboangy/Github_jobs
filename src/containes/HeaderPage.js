import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    background-image: url("../../img/backgroundlmg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 12px;
    margin-bottom: 40px;
    max-width: 95%;
    margin: auto;
    margin-bottom: 50px;
    padding-top: 40px;
    padding-bottom: 40px;
`;

const Form = styled.form`
    margin-right: 15%;
    margin-left: 15%;
    max-width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-radius: 12px;
    padding: 2px;
    input {
        width: 100%;
        background: none;
        border: none; 
        padding: 16px;
        outline: none;
        cursor: pointer;
        font-size: 18px;
    }
    button {
        border: none;
        line-height: 2.5;
        padding: 6px 20px;
        font-size: 1rem;
        text-align: center;
        cursor: pointer;
        outline: none;
        color: #fff;
        text-shadow: 1px 1px 1px #000;
        border-radius: 10px;
        background-color: #001ddc;
        background-image: linear-gradient(to top left,
        rgba(0, 0, 0, .2),
        rgba(0, 0, 0, .2) 30%,
        rgba(0, 0, 0, 0));
        box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
                    inset -2px -2px 3px rgba(0, 0, 0, .6);
    }
`;

function HeaderPage() {

    function handleHeaderSearch(e) {
        e.preventDefault();
        console.log("I am clicked");
        e.target.reset();
    }

    return (
        <Header>
            <Form onSubmit={handleHeaderSearch}>
                <input type="text" placeholder="Titles, companies, expertise or benefits"/>
                <button type="submit">Search</button>
            </Form>
        </Header>
    )
}

export default HeaderPage
