import React from 'react';

class TableHeader extends React.Component {
    constructor() {
      super()
    }
  
    render() {
      return (  
          <thead>
            <tr>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Возраст</th>
              <th>Телефон</th>
            </tr>
          </thead>   
     )  
    }
  }
  
  
  
  export default TableHeader;