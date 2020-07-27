import newElement from '../components/newelement.js';
const Home = () => {
  const home = newElement('div');
  const header = newElement('h1');
  home.appendChild(header);
  header.innerHTML = 'Home';
  return home;
};
export default Home;