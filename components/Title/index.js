/* @jsx node */
import './Title.css';
import Hello from '../Hello';

export default function (title) {
  return `<h1>${Hello}${title}</h1>`;
}
