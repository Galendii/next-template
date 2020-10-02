const { createGlobalStyle } = require("styled-components");

const GlobalStyles = createGlobalStyle`


    body{
        margin: 0;
        width: 100%;
        height: 100%;
        overflow-x:hidden;
        overflow-y:auto;
        color: var(--dark);
        font-family: 'Montserrat', sans-serif;
    }

    span{
        color: var(--dark);
    }
    

    :root{
        --primary: #333;
        --primary-500: #2C2C2C;
        --secondary: #FADA5E;
        --secondary-100: #FFD300;
        --white: #fff;
        --gray: #8E8E8E;
        --dark: #000;
        --light-gray: #f1f1f1;
        --green: #007F00;
        --red: #e02030;
        --light-blue: #24C9C3;
        --light-blue-opacity: rgba(36, 201, 195,0.4);
        --dark-blue: #197D87;
        --radius-sm: 4px;
        --radius-md: 12px;
        --radius-lg: 24px;
        --font-mute: 10px;
        --font-sm: 16px;
        --font-md: 18px;
        --font-lg: 32px;
    }
    


`;

export default GlobalStyles;
