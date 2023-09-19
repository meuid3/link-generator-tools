export const copyClipboard = (texto) => {
  // Cria um elemento de input oculto
  const input = document.createElement('input');
  input.value = texto;
  document.body.appendChild(input);

  // Seleciona o texto dentro do input
  input.select();
  input.setSelectionRange(0, 99999); // Para seleção em navegadores móveis

  // Copia o texto para a área de transferência
  document.execCommand('copy');

  // Remove o elemento de input
  document.body.removeChild(input);

  // Atualiza o estado para indicar que o texto foi copiado
  return true;
};

