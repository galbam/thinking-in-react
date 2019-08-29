import React from 'react';

const Social = (props) => {

     return (
          <a
               target="_blank"
               rel="noopener noreferrer"
               href={props.url}
               className="btn-social btn-outline"
          >
               <i className={props.icon} />
          </a>
     )

}

export default Social
