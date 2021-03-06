import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignupPage from "./components/pages/SignupPage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
import NewBookPage from "./components/pages/NewBookPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import TopNavigation from "./components/navigation/TopNavigation";
import AboutUsPage from "./components/pages/AboutUsPage";
import TrusteesPage from "./components/pages/TrusteesPage";
import ContactUsPage from "./components/pages/ContactUsPage";
import ResearchPage from "./components/pages/ResearchPage";
import ManagementPage from "./components/pages/ManagementPage";
import termsandconditions from "./components/pages/termsandconditions";
import privacypolicy from "./components/pages/privacypolicy";

const App = ({ location, isAuthenticated }) => (
  <div className="ui container">
    {isAuthenticated && <TopNavigation />}
    <Route location={location} path="/homepage" exact component={HomePage} />
    <Route
      location={location}
      path="/confirmation/:token"
      exact
      component={ConfirmationPage}
    />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <GuestRoute
      location={location}
      path="/signup"
      exact
      component={SignupPage}
    />
    <GuestRoute
      location={location}
      path="/forgot_password"
      exact
      component={ForgotPasswordPage}
    />
    <GuestRoute
      location={location}
      path="/reset_password/:token"
      exact
      component={ResetPasswordPage}
    />
    <UserRoute
      location={location}
      path="/dashboard"
      exact
      component={DashboardPage}
    />
    <Route
    location={location}
    path="/"
    exact
    component={NewBookPage}
  />
    <Route
      location={location}
      path="/aboutus"
      exact
      component={AboutUsPage}
    />
    <Route
      location={location}
      path="/trustees"
      exact
      component={TrusteesPage}
    />
    <Route
    location={location}
    path="/contactus"
    exact
    component={ContactUsPage}
  />
    <Route
      location={location}
      path="/research"
      exact
      component={ResearchPage}
    />
    <Route
      location={location}
      path="/management"
      exact
      component={ManagementPage}
    />
    <Route
      location={location}
      path="/termsandconditions"
      exact
      component={termsandconditions}
    />
    <Route
      location={location}
      path="/privacypolicy"
      exact
      component={privacypolicy}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email
  };
}

export default connect(mapStateToProps)(App);
