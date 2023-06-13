# Advanced CSS: Variables, Calculations, Pseudo Selectors and More

In this section, we're diving into more advanced CSS techniques: CSS Variables (`var`), Calculations (`calc`), pseudo selectors and more. These features enhance the maintainability and flexibility of our styles. We'll also shed light on how our code could be improved for better compatibility with older browsers.

## CSS Variables (`var`)

CSS Variables, also known as "CSS Custom Properties", empower us to specify particular values at one place and then reuse them throughout the style sheet. This makes our CSS more maintainable and flexible.

In our assignment, we utilize CSS variables to define our colors, fonts, spacing, and more. This means if we want to tweak a color or adjust the spacing, we only need to update it at one place. Here's how we've defined and used variables:

```css
:root {
    --color-primary: #15435A;
    --color-secondary: #61A5C2;
    ...
}

body {
    background: var(--color-primary);
}
```

## Calculations (`calc`)

The `calc()` function in CSS enables us to perform calculations to compute CSS property values. This is an impressive tool that allows us to maintain relationships between properties.

In our assignment, we use `calc()` to dynamically figure out the gap size in our grid layout:

```css
.skill-list {
    gap: calc(.5 * var(--base-spacing));
}
```

## Pseudo Selectors

Pseudo selectors are keywords added to selectors that allow us to style a specific state of the selected element(s). In our assignment, we've used the `:last-child` pseudo selector to remove the border from the last section in our main content:

```css
.main-content section:last-child {
    border-bottom: none;
}
```

## Backward Compatibility 

To ensure our CSS code is compatible with older browsers that may not support CSS variables and `calc()`, we can provide fallback styles. These styles will be used if the browser doesn't understand the variables or `calc()`. Here is an example:

```css
body {
    background: #15435A; /* Fallback color */
    background: var(--color-primary);
}
```

In this example, an older browser that doesn't support CSS variables will use the hardcoded `#15435A` color. Browsers that do support variables will override this with the `var(--color-primary)` value.

Remember, CSS is read top-to-bottom, and later values override earlier ones, making this approach effective for providing fallbacks.

# Advanced CSS: Variables, Calculations, Pseudo Selectors, and Backward Compatibility

## CSS Variables (`var`)

CSS Variables, also known as CSS Custom Properties, are a potent feature in CSS that lets you store specific values for reuse throughout your stylesheets. Think of them as a way to define a constant value that can be reused many times.

For instance, you can define a variable for your primary color:

```css
:root {
    --primary-color: #007BFF;
}
```

Then, you can use this variable anywhere in your CSS with the `var()` function:

```css
header {
    background-color: var(--primary-color);
}
```

## CSS Calculations (`calc`)

The `calc()` function lets you perform calculations to compute CSS property values. It can be used anywhere a length, frequency, angle, time, percentage, number, or integer is allowed.

An example usage could be to create a layout where an element takes up a certain percentage of the screen minus a fixed amount of pixels:

```css
.container {
    width: calc(100% - 20px);
}
```

## Pseudo Selectors

Pseudo selectors in CSS let you style specific states or parts of HTML elements. A few commonly used ones are:

- `:hover`: Styles an element when it's being hovered over by the user. 
- `:active`: Styles an element at the moment it's being clicked.
- `:first-child` and `:last-child`: Styles the first or last child elements of their parent.

For instance, you can change the color of a link when it's being hovered over:

```css
a:hover {
    color: red;
}
```

## Backward Compatibility

Not all CSS features are supported by all browsers, especially older ones. Therefore, it's crucial to ensure your CSS code is backward compatible. One common method is to provide fallback styles.

Fallback styles are styles that will be used if the browser doesn't support the main styles. For instance, if you're using a CSS variable, you can provide a hardcoded fallback color:

```css
body {
    background-color: #000000; /* Fallback color */
    background-color: var(--primary-color);
}
```

In this case, if a browser doesn't support CSS variables, it will ignore the second line and use the fallback color.
