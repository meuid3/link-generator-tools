import { useEffect, useState } from "react"
import { Grid } from "../../layout/Grid"
import { CxInput } from "../../inputs/cx-input";
import { CxSelect } from "../../inputs/cx-select";
import { CxIconBtn } from "../../inputs/cx-icon-btn";
import hotfix from "../../../images/icons/hotfix2.png"
import feature from "../../../images/icons/feature.png"
import bugfix from "../../../images/icons/bug.png"
import { SimpleList } from "../../layout/simple-list";
import { TextLimiter } from "../../layout/text-limiter";
import { CxAction } from "../../inputs/cx-actions";
import { copyClipboard } from "../../../utils";
import { v4 as uuidv4 } from 'uuid';
import { createAcesso, listAcessos } from "../../../db/db-acessos";

export const LinksForm = ({acessos, ambientes}) => {

  const [branch, setBranch] = useState('');
  const [project, setProject] = useState(acessos[0]);
  const [typeBranch, setTypeBranch] = useState('feature');
  const [email, setEmail] = useState('');
  const [port, setPort] = useState('3000')

  const getProjectData = ({id}) => {
    let ambiente = acessos.find(item => item.id === id)

    const urls = ambiente?.urls?.map(item => {
      let aux = {nome: '', caminho: ''}
      aux.caminho = item.caminho
        .replace('${email}', email)
        .replace('${tipo}', typeBranch)
        .replace('${branch}', branch)
        .replace('${porta}', port)
      aux.nome = item.nome

      return aux;
    })

    let obj = {id:'', projeto: '', urls: ''}
    obj.id = ambiente.id;
    obj.projeto = ambiente.projeto;
    obj.urls = urls;

    console.log("Objeto",obj)
  
    setProject(obj)
  }

  const create = () => {
    const data = {
      branch: branch,
      email: email,
      projeto: project.id,
      tipo: typeBranch,
      porta: port
    }

    const result = createAcesso(data)
    console.log('resultado', result);
  }


  const list = async () => {
    try {
      const registros = await listAcessos();
      console.log(registros)
    } catch (error) {
      console.error('Erro ao listar acessos:', error);
    }
  }

  useEffect(() => {
    getProjectData(project)
  }, [branch, typeBranch, email, port])

  return (
    <Grid.Container>
      <Grid.RowStart pt={'50px'}>
        <CxInput
          label='Branch'
          placeholder='Branch name'
          state={branch}
          setState={setBranch}
          type='text'
        />

        <CxInput
          label='E-mail'
          placeholder='Email'
          state={email}
          setState={setEmail}
          type='text'
        />

        <CxSelect
          label='Projeto'
          callback={getProjectData}
          items={ambientes}
          width={'200px'}
        />
      </Grid.RowStart>
      <Grid.RowStart>
        <Grid.Container pt={'12px'}>
          <CxIconBtn 
            title={'Feature'}
            image={feature}
            active={typeBranch === 'feature'}
            onClick={() => setTypeBranch('feature')}
          />
        </Grid.Container>

        <Grid.Container pt={'12px'}>
          <CxIconBtn 
            title={'Hotfix'}
            image={hotfix}
            active={typeBranch === 'hotfix'}
            onClick={() => setTypeBranch('hotfix')}
          />
        </Grid.Container>

        <Grid.Container pt={'12px'}>
          <CxIconBtn 
            title={'Bugfix'}
            image={bugfix}
            active={typeBranch === 'bugfix'}
            onClick={() => setTypeBranch('bugfix')}
          />
        </Grid.Container>

        <CxInput
          label='Porta'
          placeholder='Porta'
          state={port}
          setState={setPort}
          type='text'
          width={'60px'}
        />

      <Grid.Container pt={'12px'}>
          <CxIconBtn 
            title={'Feature'}
            image={feature}
            onClick={() => create()}
          />
        </Grid.Container>

        <Grid.Container pt={'12px'}>
          <CxIconBtn 
            title={'Feature'}
            image={feature}
            onClick={() => list()}
          />
        </Grid.Container>

      </Grid.RowStart>

      <Grid.RowStart>
        <SimpleList.Container>
          {
            project?.urls?.map((item, index) => {
              return (
                <SimpleList.Item key={uuidv4()}>
                  <Grid.RowSpaceBetween p>
                    <Grid.RowStart pt="10px">
                        <strong>{item.nome}</strong>
                        &nbsp;
                        <TextLimiter width={'450px'}>
                          {item.caminho}
                        </TextLimiter>
                      </Grid.RowStart>
                      
                      <Grid.RowEnd>
                        <CxAction.Copy onClick={() => copyClipboard(item.caminho)}/>
                        <CxAction.Redirect url={item.caminho}/>
                      </Grid.RowEnd>
                  </Grid.RowSpaceBetween>
                </SimpleList.Item>
              )
            })
          }
        </SimpleList.Container>
      </Grid.RowStart>
    </Grid.Container>
  )
}