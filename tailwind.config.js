 module.exports = {
    // ...
    safelist: [
      {
        pattern: /(from|to|bg|shadow|border)-(blue|indigo|purple|pink|emerald|teal|red|orange|amber|yellow|lime|cyan|sky|violet|fuchsia|rose)-(600|500|400|300|200|100|50)\/(10|15|20|25|30|40|50|60|70|80|90|100)/,
        variants: ['hover', 'dark', 'group-hover'],
      },
      // ... другие паттерны для bg-clip-text, text-transparent и т.д.
    ],
    theme: {
      extend: {
        colors: {
          // Определите RGB значения для каждого цвета, чтобы можно было использовать rgba()
          // Пример:
          blue: {
            600: '#2563eb', // Пример цвета
            rgb: '37 99 235', // RGB значение для использования в rgba()
          },
          purple: {
            600: '#9333ea',
            rgb: '147 51 234',
          },
          // ... и так для всех используемых цветов
        },
      },
    },
    // ...
  };