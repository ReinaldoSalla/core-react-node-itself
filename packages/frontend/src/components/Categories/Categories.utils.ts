import contents from '../../constants/contents';
import {
  ReactComponent as JavaScriptSvg
} from '../../assets/icons/javascript.svg';
import { ReactComponent as ReactSvg } from '../../assets/icons/react.svg';
import { ReactComponent as ServerSvg } from '../../assets/icons/server.svg';
import { normalToHifen } from '../../utils/textManipulation';

const injectableContents = [
  'Curated tutorials, emphasizing on ES6+ features',
  'Concepts from React, focusing on function components and React Hooks',
  'Extending applications with Node.js and GraphQL'
];

const injectableSubcontents = [
  {
    description: [
      'Iterating over sequences by repetition or by traversing an iterable',
      'Making async calls and avoiding callback hell',
      'Syntatic sugar for Generator plus Promises'
    ]
  },
  {
    description: [
      'Manipulating state with the useState hook',
      'Decoupling the state management with the useReducer hook',
      'Dealing with side effects inside functional components',
      'Using the Intersection Observer with React',
      'Optimizing images in React'
    ]
  },
  {
    description: [
      'Modeling backend APIs with GraphQL and integrating with the frontend',
      'Persisting unstructured data using a Non-Relational Database',
      'Authenticating users on the web with passport.js'
    ]
  }
];

const getProcessedSubcontents = (
  subcontents: any,
  injectableIndex: number
): any => (
  subcontents.map((subcontent: any, index: number) => ({
    title: subcontent,
    path: normalToHifen(subcontent),
    description: injectableSubcontents[injectableIndex].description[index]
  }))
);

const processedContents = contents.map((content, index) => ({
  ...content,
  description: injectableContents[index],
  subcontents: getProcessedSubcontents(content.subcontents, index)
}));

const icons = [
  JavaScriptSvg,
  ReactSvg,
  ServerSvg
];

export { processedContents, icons };