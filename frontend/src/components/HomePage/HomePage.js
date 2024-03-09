import React from 'react';
import HomePageStyled from './HomePageStyled';
import NavBar from '../Navbar/NavBar';
import Header from '../Header/Header';
import TaskTable from '../TaskTable/TaskTable';




function HomePage() {
  return (
   <HomePageStyled>
    <Header />
    <NavBar />
    
    <TaskTable />
   </HomePageStyled>
  )
}

export default HomePage