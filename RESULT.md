## Results:
*sorted by rerender time*

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :--- | :---
[react (without styles)](https://github.com/facebook/react) | - | - | 100.67 | 196.36
[react (with inline-styles)](https://github.com/facebook/react) | - | + | 171.82 | 222.01
[css-zero](https://github.com/CraigCav/css-zero) | - | + | 165.84 | 230.24
[react-css](https://github.com/facebook/react) | + | + | 188.77 | 247.82
[emotion-css-mode](https://github.com/emotion-js/emotion) | + | + | 304.63 | 267.66
[styled-components-inline-styles](https://github.com/styled-components/styled-components/tree/v2) | + | + | 371 | 291.95
[styled-components-themed](https://github.com/styled-components/styled-components/tree/v2) | - | + | 432.81 | 295.3
[styletron-css](https://github.com/rtsao/styletron) | + | - | 271.08 | 318.64
[styletron-simple](https://github.com/rtsao/styletron) | + | - | 439.56 | 329.04
[styletron-themed](https://github.com/rtsao/styletron) | - | - | 476.94 | 361.74
[emotion-extract-static](https://github.com/emotion-js/emotion) | + | + | 536.28 | 368.84
[emotion-simple](https://github.com/emotion-js/emotion) | + | - | 566.91 | 372.99
[styled-components](https://github.com/styled-components/styled-components/tree/v2) | + | - | 634.59 | 397.77
[styled-components-decouple-cell](https://github.com/styled-components/styled-components/tree/v2) | + | - | 620.76 | 404.24
