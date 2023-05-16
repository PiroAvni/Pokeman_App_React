# React props & file structure Exercises

Practice of React props & file structure

## Organisation

### Duration

Two exercises:

- Exercise #1: 1h
- Exercise #2: 1h

Note that times are approximate and you can decide how much time you spend on each exercise

### Team

Same pairs of the previous day.

## Brief

### Exercise #1

Refactor your music app to have a better file structure and props

Requirements are:

- Refactor your file structure if appropriate
- Implement props
  - Pass data from a parent component to a child component
  - Pass a callback function from a parent component to a child component and invoke it on an event in the child component

### Exercise #2

Create a pokemon application (a pokedex) that displays an interface that looks like this:

![Pokemon Pokedex](https://user-images.githubusercontent.com/25111733/208680030-e7e12ac2-c181-4d04-b608-27e7078d75cb.png)

To create the pokedex, you should use 2 components, a `Pokedex` component and a `Pokecard` component. The `Pokedex` should be the parent component and it will create 5 `Pokecard` components for each pokemon that will be shown.

The application should use this hardcoded data below:

```js
{
  pokemon: [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
  ];
}
```

## Output

### Exercise #1

Make sure to create a new branch in your music repo and push your changes from this exercise

### Exercise #2

Make sure to create a new repository for your pokemon app and send your repo link to the Slack channel