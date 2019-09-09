# Button
The Button component has the following options:

<br/>
<br/>

## Exemple
```json
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
```json
{
    label: string,
    color: string,
    secondary: boolean,
    disabled: boolean
}
```

<br/>
<br/>

## Label

use any string like:

`label: 'anything text'`

<br/>
<br/>

## Color
```
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
<br/>

## Secondary

use true or false (default is false)

`secondary: true`

<br/>
<br/>

## Disabled

use true or false (default is false)

`disabled: false`
