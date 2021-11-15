import React from 'react';

type Props ={
  selectedNationalities: string[],
}

export const SelectedNats: React.FC<Props> = React.memo(
  ({ selectedNationalities }) => {
    console.log('renden selectnat');
    
    return (
      <div>
        {selectedNationalities.map(nat => {
          if (nat !== '&nat=') {
            return (
              <div key={nat}>{nat}</div>
            )
          }
          return null;
        })}
      </div>
    )
  }
)