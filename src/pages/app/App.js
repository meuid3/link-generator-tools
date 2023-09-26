import { useEffect, useRef, useState } from 'react';
import './index.css';
import { menuAmbientesItems } from '../../services/menu';
import { TabComponent } from '../../components/layout/tab';
import { TabAmbientesComponent } from '../../components/layout/tab-ambients';
import { ApiForm } from '../../components/forms/api-form';
import { FrontEndForm } from '../../components/forms/front-form';
import {data} from '../../db/mock'
import { LinksForm } from '../../components/forms/links-form';
import { Editor } from '@tinymce/tinymce-react';
import { TextArea } from '../../components/inputs/cx-text-area';
import { Grid } from '../../components/layout/Grid';

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

        <TabComponent.Item title={'Notas'}>
         <Grid.RowCenter>
              <div style={{width: 150, height: '450px', background: '#fff'}}>Teste</div>
              <TextArea />
         </Grid.RowCenter>
        </TabComponent.Item>

        <TabComponent.Item title={'Outros'}>
        <h1>Em breve!</h1>
        </TabComponent.Item>

      </TabComponent.Container>
    </div>
  );
}

export default App;
