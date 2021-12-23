import React from 'react';
import Tarif from './Tarif';
import tr from './tr';


class Trafik extends React.Component {
  render() {
    return (
      <>
        {
          tr.map((trafic) =>
            <Tarif {...trafic} />
          )
        }
      </>
    );
  }

}

export default Trafik;
