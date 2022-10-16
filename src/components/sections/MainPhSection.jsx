import React from 'react'
import { Outlet } from 'react-router-dom';
import PhNavSections from './PhNavSections'

const MainPhSection = () =>
{
  return (
    <>
      <Outlet/>
      <PhNavSections />
    </>
  );
};

export default MainPhSection