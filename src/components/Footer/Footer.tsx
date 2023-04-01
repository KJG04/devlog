import { GithubLogo } from '#components';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Link, Spacer } from '@nextui-org/react';
import { FC, memo } from 'react';

const Footer: FC = () => {
  const theme = useTheme();

  return (
    <>
      <ButtonContainer>
        <Link href="mailto:freedom7113@gmail.com" aria-label="contact email">
          <svg
            width={30}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill={theme.colors.gray900.value}
              d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
            />
          </svg>
        </Link>
        <Link href="https://github.com/KJG04" target="_blank">
          <GithubLogo />
        </Link>
      </ButtonContainer>
      <Spacer y={0.5} />
      <FooterContent>김진근 • © {new Date().getFullYear()}</FooterContent>
      <Spacer y={0.5} />
    </>
  );
};

export default memo(Footer);

const FooterContent = styled.div`
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  column-gap: 1rem;
  justify-content: center;
`;
