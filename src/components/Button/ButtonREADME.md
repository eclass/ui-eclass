# Storybook README addon

![Storybook README addon](https://tuchk4.tinytake.com/media/6074cc?filename=1507031891423_03-10-2017-14-58-09.png&sub_type=thumbnail_preview&type=attachment&width=700&height=542&_felix_session_id=53f589ad3ebd6ae15ad9850b6bb20044&salt=MjAwMDAyNF82MzIxMzU2)

This addon is compatible with:

- Storybook for React ([React example storybook](packages/example-react))
- Storybook for Vue ([Vue example storybook](packages/example-vue))

[Live demo](https://tuchk4.github.io/storybook-readme)

Features:

- Does not affect on _story function_. So [Storybook Info](https://github.com/storybooks/storybook/tree/master/addons/info) works correctly now.
- 100% markdown support
- Code highlighting
- Accept multiple README (useful for [hoc component](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e) - add component's and original component's README)
- Looks like Github's README
- Supports `<docs/>` tags for vue components ([example-vue/components/MyButton/MyButton.vue](https://github.com/tuchk4/storybook-readme/blob/master/packages/example-vue/components/MyButton/MyButton.vue)).

Also it very useful because most projects and components already have _README.md_ files. Now it is easy to add them into your Storybook.

Stories will be added with _.addWithInfo_ method if [Storybook Info Addon](https://github.com/storybooks/storybook/tree/master/addons/info) is installed.

### Install