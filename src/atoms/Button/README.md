# Button
The Button component has the following options:

<br/>

## Exemple

```js
{
    label: 'Button text',
    color: 'primary.dark',
    secondary: true,
    disabled: false
}
```

<br/>
<br/>

## Types

```js
{
    label: string,
    color: string,
    secondary: boolean,
    disabled: boolean
}
```

<br/>
<br/>

### label

use any string like:

```js
label: 'anything text'
```

<br/>

### color

```code
use a string that is:

1. option from the design system
    - 'primary.main'
    - 'primary.dark'
    - 'secondary.dark'
    - ...

2. color name
    - 'red'
    - 'blue'

3. color code
    - 'rgb(12,66,120)'
    - 'hsl(219, 100%, 35%)'
    - '#333fff'
```

<br/>

### secondary

use true or false (default is false)

```js
secondary: true
```

<br/>

### disabled

use true or false (default is false)

```js
disabled: false
```
