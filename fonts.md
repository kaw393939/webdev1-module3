# Fonts

## Videos and Other Resources - More or less requird and they are short

- [Understanding Fonts in General](https://www.youtube.com/watch?v=_4cW79vF1mU)
- [Font and CSS How To Youtube - 3 Minutes](https://www.youtube.com/watch?v=UzURcO1MnEU)
- [Google Fonts How To YouTube](https://www.youtube.com/watch?v=eLY5KSXcQ6c)
- [Google Fonts Site Link](https://fonts.google.com)
- [Font Awesome How To Youtube](https://www.youtube.com/watch?v=8-VRIEaIKqI)
- [Font Awesome Site Link](https://fontawesome.com)

## Guide on Fonts and the Influence of Helvetica

Typography, especially fonts, have a significant impact on web design and overall user experience. In this guide, we'll explore the basics of fonts and discuss the influence of Helvetica on design.

### 1. Understanding Fonts

Fonts are graphical representations of text that can convey mood, brand, and readability. There are four primary types of font families:

1. **Serif:** Serif fonts have small lines attached to the end of each letter. They're often used for large bodies of text because they're considered easier to read. Examples include Times New Roman and Georgia.

2. **Sans-serif:** Sans-serif fonts don't have the small lines that serif fonts do. They're clean, modern, and often used in digital design. Examples include Arial and, of course, Helvetica.

3. **Monospace:** Every letter in a monospace font has the same width, making them popular in coding for creating a uniform layout. Examples include Courier New and Monaco.

4. **Display:** These fonts are used for headings or titles due to their unique styles. They're not suitable for body text because they can be hard to read. Examples include Impact and Comic Sans.

### 2. The Influence of Helvetica

Helvetica is one of the most widely used sans-serif typefaces. It was developed in 1957 by Swiss typeface designer Max Miedinger. The aim was to create a neutral typeface that had great clarity, no intrinsic meaning in its form, and could be used on a wide variety of signage.

Helvetica is praised for its clean lines and high readability, which makes it a favorite choice for corporate branding. It's used by numerous major companies, including American Airlines, Toyota, and Microsoft. Its influence is so profound that a documentary film has been made about it, exploring its ubiquity and impact on our visual landscape.

Despite its widespread use, Helvetica is not without its critics. Some designers argue it's overused and lacks personality. Nonetheless, its popularity endures, and it continues to be a staple in the world of typography.

Using fonts in CSS involves the `font-family` property. Here's an example:

## Using Fonts in CSS

Fonts can significantly influence the aesthetics and readability of a website. In CSS, we use the `font-family`, `font-size`, `font-weight`, and `font-style` properties to style our text.

#### Font-Family

The `font-family` property is used to specify the typeface that will be used:

```css
body {
  font-family: 'Helvetica', sans-serif;
}
```

In this example, the browser will use the Helvetica font for the body of the document. If Helvetica isn't available, the browser will use the default sans-serif font.

#### Font-Size

The `font-size` property is used to control the size of the text. It can be specified in several units, including pixels (`px`), ems (`em`), and percentages (`%`):

```css
body {
  font-size: 16px;
}
```

In this example, the text in the body of the document is set to 16 pixels.

#### Font-Weight

The `font-weight` property is used to specify the thickness of the text. Common values are `normal` and `bold`, but some fonts also support numeric values ranging from 100 (thinnest) to 900 (thickest):

```css
strong {
  font-weight: bold;
}
```

In this example, any text marked with the `strong` tag will be displayed in bold.

#### Font-Style

The `font-style` property is used to control the style of the font. Common values are `normal`, `italic`, and `oblique`:

```css
em {
  font-style: italic;
}
```

In this example, any text marked with the `em` tag will be displayed in italics.

By using these properties, you can have precise control over the typography on your website. Choose fonts that align with your brand and audience, and remember that readability should always be a priority.
