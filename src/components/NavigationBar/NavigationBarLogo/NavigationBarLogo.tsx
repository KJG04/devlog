import React, { memo } from 'react';

const NavigationBarLogo: React.FC = () => {
  return (
    <div className="flex gap-x-2 align-middle">
      <svg
        width="24"
        height="24"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 963.588H279.529V845.941H153.412V177.706H279.529V61H0V963.588Z"
          className="fill-zinc-100"
        />
        <path
          d="M1024 963.588V61H744.471V177.706H870.588V845.941H744.471V963.588H1024Z"
          className="fill-zinc-100"
        />
      </svg>
      <div className="font-semibold">김진근의 Devlog</div>
    </div>
  );
};

export default memo(NavigationBarLogo);
