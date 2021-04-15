import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import styled from 'styled-components'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import EditTodo from './EditTodo'
import './App.css'

const Nabvar = styled.nav`
  background: #dbfffe;
  min-height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center
`

const Logo = styled.div`
  font-weight: bold;
  font-size: 23px;
  latter-spacing: 3px;
`

const NabItems = styled.ul`
  display: flex;
  width: 400px;
  max-width: 40%;
  justify-content: space-around;
  list-style: none;
`

const NabItem = styled.li`
  font-size: 19px;
  font-weight: bold;
  opacity: 0.7;
  &:hover{
    opacity: 1;
  }
`

const Wrapper = styled.div`
  width: 700px;
  max-width: 85%;
  margin: 20px auto;
`



function App(){
  return (
    <>
      <Nabvar>
        <Logo>
          Todo
        </Logo>
        <NabItems>
          <NabItem>
            <Link to="/todos">
              Todos
            </Link>
          </NabItem>
          <NabItem>
            <Link to="/todos/new">
              Add New Todo
            </Link>
          </NabItem>
        </NabItems>
      </Nabvar>
      <Wrapper>
        <Switch>
          <Route exact path="/todos" component={TodoList} />
          <Route exact path="/todos/new" component={AddTodo} />
          <Route  path="/todos/:id/edit" component={EditTodo} />
        </Switch>
      </Wrapper>
    </>
  );
}

export default App
