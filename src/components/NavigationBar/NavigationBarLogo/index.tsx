// create logo component

import React from 'react';
import { Navbar, Text, useTheme } from '@nextui-org/react';

const NavigationBarLogo: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div style={{ display: 'flex', columnGap: '0.5rem', alignItems: 'center' }}>
      {isDark && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 1024 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 963.588H279.529V845.941H153.412V177.706H279.529V61H0V963.588Z"
            fill="white"
          />
          <path
            d="M1024 963.588V61H744.471V177.706H870.588V845.941H744.471V963.588H1024Z"
            fill="white"
          />
        </svg>
      )}
      {!isDark && (
        <svg
          width="24"
          height="24"
          viewBox="0 0 1024 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 963.588H279.529V845.941H153.412V177.706H279.529V61H0V963.588Z"
            fill="black"
          />
          <path
            d="M1024 963.588V61H744.471V177.706H870.588V845.941H744.471V963.588H1024Z"
            fill="black"
          />
        </svg>
      )}
      <Navbar.Content hideIn="xs">
        <Text css={{ fontWeight: '$bold' }}>김진근의 Devlog</Text>
      </Navbar.Content>
    </div>
  );
};

export default NavigationBarLogo;
