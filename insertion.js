let vetor = [5, 3, 8, 4, 2];

// Começamos do segundo elemento (índice 1), pois o primeiro já é uma "lista ordenada" de 1 item
for (let i = 1; i < vetor.length; i++) {
    let chave = vetor[i]; // O número que queremos encaixar no lugar certo
    let j = i - 1;        // 'j' começa no elemento imediatamente à esquerda da chave

    /* Enquanto 'j' for um índice válido (>= 0) E 
       o valor no vetor[j] for maior que a nossa chave:
    */
    while (j >= 0 && vetor[j] > chave) {
        vetor[j + 1] = vetor[j]; // Empurramos o elemento maior para a direita
        j--;                     // Diminuímos 'j' para comparar com o próximo à esquerda
    }

    // Quando o laço para, o lugar vazio correto para a chave é j + 1
    vetor[j + 1] = chave;
}

document.writeln("Vetor ordenado: " + vetor);
