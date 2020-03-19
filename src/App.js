import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import faker from 'faker/locale/en_GB'

import UseState from './views/UseState'
import UseEffect from './views/UseEffect'
import UseContext from './views/UseContext'
import UseContext2 from './views/UseContext2'
import UseRef from './views/UseRef'
import CustomHook from './views/CustomHook'
import CustomHook2 from './views/CustomHook2'
import UseMemo from './views/UseMemo'
import HandleMultipleState from './views/HandleMultipleState'
import LazyAndSuspense from './views/LazyAndSuspense'
import ReactMemo from './views/ReactMemo'

faker.seed(123)

const users = []

for (let i=0; i<100; i++) {
  const firstName= faker.name.firstName()
  const lastName = faker.name.lastName()
  const user = {
    id: faker.random.uuid(),
    name: `${firstName} ${lastName}`,
    avatar: faker.image.avatar(),
    expires: faker.random.number(10) > 2 ? faker.date.future() : faker.date.past(),
    email: faker.internet.email(firstName, lastName),
    company: faker.company.companyName(),
    location: `${faker.address.city()}, ${faker.address.stateAbbr()}`
  }

  users.push(user)
}

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/" component={UseState} />
       <Route path="/useEffect" component={UseEffect} />
       <Route path="/useContext" component={UseContext} />
       <Route path="/useContext2" component={UseContext2} />
       <Route path="/useRef" component={UseRef} />
       <Route path="/customHook" component={CustomHook} />
       <Route path="/customHook2" component={CustomHook2} />
       <Route path="/useMemo" render={() => <UseMemo users={users} />} />
       <Route path="/handleMultipleState" component={HandleMultipleState} />
       <Route path="/lazyAndSuspense" component={LazyAndSuspense} />
       <Route path="/reactMemo" component={ReactMemo} />
     </Switch>
   </Router>
  );
}

export default App;
