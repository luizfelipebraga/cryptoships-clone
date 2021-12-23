import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SmoothScroll } from './components/Scroll';
import { BoxesPage } from './pages/Boxes';
import { HomePage } from './pages/Home';
import { LandingPage } from './pages/Landing';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" exact component={HomePage} />

        <SmoothScroll>
          <Route path="/boxes" exact component={BoxesPage} />
        </SmoothScroll>
      </Switch>
    </BrowserRouter >
  )
}
