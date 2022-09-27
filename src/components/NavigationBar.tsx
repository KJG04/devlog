import { Navbar } from '@nextui-org/react';
import { FC } from 'react';
import { NavigationBarLogo } from '@components';

const NavigationBar: FC = () => {
  return (
    <Navbar
      shouldHideOnScroll
      variant="sticky"
      css={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '.nextui-navbar-container': {
          boxShadow: '$md',
          borderRadius: '$2xl',
          margin: '$md',
          maxWidth: 'var(--nextui-breakpoints-md)',
          marginLeft: 'calc(2 * var(--nextui-space-sm))',
          marginRight: 'calc(2 * var(--nextui-space-sm))',
        },
      }}
    >
      <Navbar.Brand>
        <NavigationBarLogo />
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="highlight-rounded">
        <Navbar.Link href="#">게시물</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};

export default NavigationBar;
