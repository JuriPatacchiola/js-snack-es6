 // Mi creo un array di oggetti, ognuno rappresenta una bici
    const bici = [
      { nome: "Pinarello Dogma F", peso: 6.8 },
      { nome: "Specialized Tarmac SL8", peso: 6.5 },
      { nome: "Canyon Ultimate CFR", peso: 6.7 },
      { nome: "Trek Emonda SLR", peso: 6.4 },
    ];

     // Cerco lala bici con peso minore
    let biciLeggera = bici[0];
    for (let i = 1; i < bici.length; i++) {
      if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
      }
    }

    
    // Stampo il risultato in console
    console.log("La bici più leggera è:");
    console.log(`Nome: ${biciLeggera.nome}`);
    console.log(`Peso: ${biciLeggera.peso} kg`);