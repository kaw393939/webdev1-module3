## Guide on Using Images for Brand Archetypes

Visual imagery plays a significant role in conveying the personality and values of a brand archetype. To help students navigate this aspect of branding, this guide will cover copyright considerations, sources of free images, proper attribution, and using images in HTML and CSS.

### 1. Copyright Considerations

When using images for any purpose, it's important to consider copyright laws. Unauthorized use of copyrighted images can lead to legal issues. Always ensure that you have the rights to use an image before publishing it in any form.

- [Understanding Copyright for Images quick YouTube video](https://www.youtube.com/watch?v=68fRTF_fd0A)

### 2. Sources of Free Images

There are various sources online where you can find free images for commercial use. Websites like Unsplash, Pexels, and Pixabay offer high-quality images in a wide range of categories. These platforms offer images under a Creative Commons Zero (CC0) license, which allows you to freely use the images without attribution (though it's often appreciated).

- [Use this for photos that are free and legal](https://unsplash.com)

### 3. Proper Attribution

When using images that require attribution, it's essential to provide proper credit. This often involves including the name of the creator and a link to the source of the image. Each image platform will provide specific instructions on how to correctly attribute images.

- [Unsplash Copyright Explanation](https://unsplash.com/license)


### 4. Using Images in HTML and CSS

There are two main ways to use images in a webpage: directly in your HTML with the `<img>` element, or in your CSS as a background image.

To use an image in your HTML document, use the `<img>` tag and specify the source (src) of the image:

```
<img src="path/to/image.jpg" alt="Description of image">
```
The src attribute specifies the path to the image file. The alt attribute provides alternative text for the image if it cannot be displayed.

To use an image as a background in CSS, use the background-image property:

```
body {
  background-image: url('path/to/image.jpg');
}
```
### 5. Tips on File Paths
When specifying the file path for an image in HTML or CSS, it's important to understand relative and absolute paths:

Relative path: The location of the image is given relative to the current file. For example, if your HTML file and image are in the same directory, you can simply use the image file name as the src or url.
Absolute path: The full URL to the image is given. This is typically used when the image is hosted on a different server.
### 6. Responsive Design Tips
When using images, you should also consider how they will display on different screen sizes. CSS offers various properties to control this:

background-size: This property allows you to control the size of background images. The cover value scales the image as large as possible without stretching it, while maintaining its aspect ratio.
max-width: This property can be used with HTML images to ensure that they don't exceed a certain width, which is useful for responsiveness. A common technique is to set max-width: 100%; so that images shrink on smaller screens. srcset attribute: This HTML attribute allows you to specify different images to be displayed at different screen resolutions, which can improve performance on smaller screens.