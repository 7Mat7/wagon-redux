import React from 'react';
import CityList from '../containers/city_list';
import DisplaySelectedCity from '../containers/display_selected_city';

const App = () => {
  return (
    <div className="app">
      <CityList />
      <DisplaySelectedCity />
    </div>
  );
};
export default App;
