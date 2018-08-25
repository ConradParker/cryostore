export default function () {
  const icons = {
    dewar: 'M -30 0 A 25 25 0 1 1 25 0 A 25 25 0 1 1 -30 0',
    patient: 'M 11.235 2.887 C 9.689 3.932 9.273 5.587 9.349 6.468 C 9.447 7.545 9.687 8.947 9.687 8.947 C 9.687 8.947 9.211 9.182 9.211 10.127 C 9.377 12.501 10.25 11.477 10.43 12.518 C 10.862 15.026 11.85 14.579 11.85 15.948 C 11.85 18.228 10.815 19.294 7.584 20.558 C 4.342 21.827 1 23.424 1 26.189 L 1 27.572 L 28.395 27.572 L 28.395 26.189 C 28.395 23.424 25.051 21.827 21.808 20.559 C 18.577 19.296 17.545 18.231 17.545 15.95 C 17.545 14.581 18.53 15.027 18.963 12.519 C 19.144 11.478 20.017 12.503 20.185 10.129 C 20.185 9.183 19.708 8.948 19.708 8.948 C 19.708 8.948 19.948 7.546 20.044 6.469 C 20.143 5.339 19.438 2.928 16.543 2.188 C 16.037 1.718 15.694 0.97 17.253 0.22 C 13.844 0.074 13.051 1.695 11.235 2.887 Z',
    consumable: 'M10 2 h 4 v 20 h -4 z',
    cryoStorage: 'M10 4h-6c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2h-8l-2-2z',
    operator: 'M5 3c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3s-3-1.343-3-3zM12.001 7h-0.553l-3.111 6.316 1.163-5.816-1.5-1.5-1.5 1.5 1.163 5.816-3.111-6.316h-0.554c-1.999 0-1.999 1.344-1.999 3v5h12v-5c0-1.656 0-3-1.999-3z',
    visotube: 'M17,0h-3v8h-4V0H7C6.4,0,6,0.4,6,1s0.4,1,1,1h1v17.9c0,2.2,1.8,4,4,4s4-1.8,4-4V2h1c0.6,0,1-0.4,1-1S17.6,0,17,0z M14,13.9   v6c0,1.1-0.9,2-2,2s-2-0.9-2-2V9h4V13.9z',
    position: 'M -15 0 A 15 15 0 1 1 15 0 A 15 15 0 1 1 -15 0',
    goblet: 'M 15.385 -20.891 L -15.358 -20.891 C -15.358 -20.891 -16.175 -19.227 -14.592 -18.851 C -14.592 -18.851 -8.923 -15.523 -9.995 -5.913 C -9.995 -5.913 -11.682 -5.323 -10.507 -4.089 C -10.507 -4.089 -10.762 3.481 -4.838 3.589 C -4.838 3.589 -7.953 5.682 -4.94 8.099 C -4.94 8.099 -4.838 15.936 -8.872 17.761 C -8.872 17.761 -10.456 17.869 -10.557 19.962 L -10.557 20.553 L -2.03 20.553 L -2.03 20.5 L 1.954 20.5 L 1.954 20.553 L 10.482 20.553 L 10.482 19.962 C 10.381 17.869 8.797 17.761 8.797 17.761 C 4.762 15.936 4.865 8.099 4.865 8.099 C 7.878 5.736 4.762 3.589 4.762 3.589 C 10.687 3.481 10.431 -4.089 10.431 -4.089 C 11.606 -5.323 9.921 -5.913 9.921 -5.913 C 8.849 -15.523 14.517 -18.851 14.517 -18.851 C 16.254 -19.227 15.385 -20.891 15.385 -20.891 Z',
  };

  return {
    // Default colours
    clearColour: '#666666',
    kustodianColour: '#75bcc4',
    textColour: '#fff',
    borderColour: '#222222',
    reportWidth: 600,
    reportHeight: 600,
    groupIcon: {
      1: icons.dewar,
      2: icons.patient,
      3: icons.consumable,
      4: icons.cryoStorage,
      5: icons.operator,
      6: icons.visotube,
      10: icons.position,
      11: icons.goblet,
    },
  };
}
