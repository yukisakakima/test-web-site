import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
  }

  body {
    color: ${({ theme }) => theme.color.base}; //todo:
    background-color: ${({ theme }) => theme.color.black}; //todo:
    ${({ theme }) => theme['font']('sm')}
    font-family: 'Roboto', sans-serif;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
  }

  span,
  label {
    display: inline-block;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    appearance: none;
    vertical-align: middle;
    color: inherit;
    font: inherit;
    background: transparent;
    padding: 0;
    border: none;
    outline: none;
    margin: 0;
    border-radius: 0;
    text-align: inherit;
    text-transform: inherit;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    cursor: pointer;
  }

  button:disabled,
  [type="button"]:disabled,
  [type="reset"]:disabled,
  [type="submit"]:disabled {
    cursor: default;
  }

  .body-fixed {
    overflow: hidden;
  }

  .arrow::before {
    content: '';
    position: absolute;
    top: 50%;
    right: 12px;
    width: 0;
    height: 0;
    border-left: 6px solid ${({ theme }) => theme.color.transparent};
    border-right: 6px solid ${({ theme }) => theme.color.transparent};
    border-top: 6px solid ${({ theme }) => theme.color.black};
    transform: translateY(-50%);
  }

  /* react-skeleton */
  .react-loading-skeleton{
    line-height: inherit;
  }


  /* 以下から追加スタイル */
  .textClamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`

export default GlobalStyle
