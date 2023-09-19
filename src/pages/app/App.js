import { useState } from 'react';
import './index.css';
import { menuAmbientesItems } from '../../services/menu';
import { TabComponent } from '../../components/layout/tab';
import { TabAmbientesComponent } from '../../components/layout/tab-ambients';
import { ApiForm } from '../../components/forms/api-form';
import { FrontEndForm } from '../../components/forms/front-form';
import {data} from '../../db/mock'
import { LinksForm } from '../../components/forms/links-form';

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

        <TabComponent.Item title={'Ambientes'}>
          {/* <TabAmbientesComponent items={menuAmbientesItems}>
            <ApiForm/>
            <FrontEndForm/>
          </TabAmbientesComponent> */}
          <h1>Em breve!</h1>
        </TabComponent.Item>

        <TabComponent.Item title={'Outros'}>
        <h1>Em breve!</h1>
        </TabComponent.Item>

      </TabComponent.Container>
    </div>
  );
}

export default App;
