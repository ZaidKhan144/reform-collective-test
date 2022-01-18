import GlobalStyle from './GlobalStyle';
import Theme from './Theme';
import Section1 from './components/Section1/Section1';

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Section1 />
    </Theme>
  );
}

export default App;
