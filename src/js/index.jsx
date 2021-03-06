var React = require('react');
var ReactDOM = require('react-dom');
var _ReactRouter = require('react-router');
var Users = require('./user.jsx');
var About = require('./about.jsx');
var Form = require('./form.jsx');

var Router = _ReactRouter.Router;
var Route = _ReactRouter.Route;
var IndexRoute = _ReactRouter.IndexRoute;
var Link = _ReactRouter.Link;
var browserHistory = _ReactRouter.browserHistory;

var validate = require("validate.js");

require("css/libs/normalize.css");

require("css/modules/_init");
require("css/modules/_oo");
require("css/modules/_grid");
require("css/modules/_header");

var MainLayout = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header className="header">
          <nav className="header-menu">
              <h1>Wizard App</h1>
            <Link to="/" activeClassName="active">Home</Link>
            <Link to="/sample" activeClassName="active">Sample</Link>
            <Link to="/about" activeClassName="active">About</Link>
          </nav>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
      )
  }
})

ReactDOM.render((
  <Router history={browserHistory} >
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Form} />
      <Route path="sample" component={Users} />
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.getElementById('app'))
