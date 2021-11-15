import React from 'react';

import './index.scss'

type Props ={
  selectedNationalities: string[],
}

export const SelectedNats: React.FC<Props> = React.memo(
  ({ selectedNationalities }) => {
    return (
      <div className="selectedNats">
        {selectedNationalities.map(nat => {
          if (nat !== '&nat=') {
            return (
              <div key={nat} className="selectedNats__nat">
                {nat}
              </div>
            )
          }
          return null;
        })}
      </div>
    )
  }
)
