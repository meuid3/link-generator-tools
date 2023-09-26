import { useState } from 'react';
import './index.css';
import { TabComponent } from '../../components/layout/tab';
import { data } from '../../db/mock'
import { LinksForm } from '../../components/forms/links-form';
import { ToolsForm } from '../../components/forms/tools-form';

function App() {

  const [colorSelect, setColorSelect] = useState(null)
  const {acessos, ambientes} = data;

  return (
    <div className="app">
      <TabComponent.Container>
        <TabComponent.Item title={'Acessos'}>
          <LinksForm 
            acessos={acessos} 
            ambientes={ambientes}
          />
        </TabComponent.Item>

        <TabComponent.Item title={'Ferramentas'}>
          <ToolsForm/>
        </TabComponent.Item>

        <TabComponent.Item title={'Outros'}>
          <h1>Em breve!</h1>
        </TabComponent.Item>

      </TabComponent.Container>
    </div>
  );
}

export default App;
