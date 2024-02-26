function customRender(reactElem, container) {
  /* const domElem = document.createElement(reactElem.type);
  domElem.innerHTML = reactElem.children;
  domElem.setAttribute('href', reactElem.props.href);
  domElem.setAttribute('target', reactElem.props.target);

  container.appendChild(domElem)
  */

  const domElem = document.createElement(reactElem.type);
  domElem.innerHTML = reactElem.children;
  for (const prop in reactElem.props) {
    if (prop === 'children') continue
    domElem.setAttribute(prop, reactElem.props[prop])
  }
  container.appendChild(domElem)

}

const reactElem = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click to visit google',
};

const container = document.getElementById('root');
customRender(reactElem, container);
