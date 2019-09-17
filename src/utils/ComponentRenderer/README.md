# ComponentRenderer
ComponentRenderer receives a json input and recursively renders as components.

<br/>

## Exemples

### Single Component
```jsx
const input = {
    componentType: 'Button',
    props: {
      label: 'button label',
    },
}
<ComponentRenderer {...input}/>
```

Will render

```jsx
<Button label={"button label"} />
```

<br/>
<br/>

### Nested Components
We can also nest components, passing child components as an array.

```jsx
const input = {
    componentType: 'SingleColumn',
    componentChildren: [
        {
          componentType: 'Button',
          props: {
            label: 'inner button 1',
          },
        },
        {
            componentType: 'Button',
            props: {
              label: 'inner button 2',
            },
        },
    ],
}
<ComponentRenderer {...input}/>
```

Will render

```jsx
<SingleColumn>
    <Button label={'inner button 1'} />
    <Button label={'inner button 2'} />
</SingleColumn>
```

<br>
<br>

## Types

```js
{
    componentType: string,
    props: object,
    componentChildren: array
}
```

<br/>
<br/>

### componentType (required)
Use a string with the name of the component to be rendered.

```js
componentType: 'Button'
```

<br/>

### props (optional)
Use an object with the props to be passed to the component.

```js
props: {
  label: 'label exemple',
  secondary: true
}
```

<br/>

### componentChildren (optional)
Use an array of objects to be rendered as children.

```js
componentChildren: [
    {
      componentType: 'Paragraph',
      ...
    },
    {
      componentType: 'Button',
      ...
    }
]
```
