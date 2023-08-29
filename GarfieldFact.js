const getGarfieldFactById = (factId) => {
    
    const garfieldFacts = [
      { id: 1, text: 'Garfield is a cat' },
      { id: 2, text: 'Garfield is ginger' },
      { id: 3, text: 'Garfield is lazy' },
      
    ];
  
    
    const fact = garfieldFacts.find((fact) => fact.id === parseInt(factId));
  
    return fact;
  };