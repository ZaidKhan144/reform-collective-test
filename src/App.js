import GlobalStyle from './GlobalStyle';
import Theme from './Theme';

import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Section1 />
      <Section2 />
      <Section3 />
    </Theme>
  );
}

export default App;
