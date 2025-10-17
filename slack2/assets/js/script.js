    // Creo l'array iniziale con i nomi delle squadre
    const squadre = [
      { nome: "Juventus", punti: 0, falliSubiti: 0 },
      { nome: "Inter", punti: 0, falliSubiti: 0 },
      { nome: "Milan", punti: 0, falliSubiti: 0 },
      { nome: "Napoli", punti: 0, falliSubiti: 0 },
      { nome: "Roma", punti: 0, falliSubiti: 0 }
    ];

    // Assegno numeri casuali a punti e falli
    for (let i = 0; i < squadre.length; i++) {
      squadre[i].punti = Math.floor(Math.random() * 100); // punti casuali
      squadre[i].falliSubiti = Math.floor(Math.random() * 50); // falli casuali
    }

    console.log("Tutte le squadre con dati casuali:");
    console.log(squadre);

    // Creo un nuovo array con solo nome e falliSubiti
    const nuovoArray = [];

    for (let i = 0; i < squadre.length; i++) {
      const squadra = squadre[i];
      // Aggiungngo un nuovo oggetto con solo le due proprietà richieste
      nuovoArray.push({
        nome: squadra.nome,
        falliSubiti: squadra.falliSubiti
      });
    }
