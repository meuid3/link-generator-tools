import { useEffect, useState } from "react"
import { Grid } from "../../layout/Grid"
import { CxInput } from "../../inputs/cx-input";
import { CxSelect } from "../../inputs/cx-select";
import { CxIconBtn } from "../../inputs/cx-icon-btn";
import hotfix from "../../../images/icons/hotfix2.png"
import feature from "../../../images/icons/feature.png"
import bugfix from "../../../images/icons/bug.png"
import saveLink from "../../../images/icons/salvar-link.png"
import { SimpleList } from "../../layout/simple-list";
import { TextLimiter } from "../../layout/text-limiter";
import { CxAction } from "../../inputs/cx-actions";
import { copyClipboard } from "../../../utils";
import { v4 as uuidv4 } from 'uuid';
import { createAcesso, listAcessos } from "../../../db/db-acessos";
import { Table } from "../../layout/table";
import { ItemList } from "../../layout/item-list";

export const LinksForm = ({acessos, ambientes}) => {
 
  const [branch, setBranch] = useState('');
  const [project, setProject] = useState(acessos[0]);
  const [customProject, setCustomProject] = useState(null)
  const [typeBranch, setTypeBranch] = useState(null);
  const [email, setEmail] = useState('');
  const [port, setPort] = useState(null)
  const [listItems, setListItems] = useState(null)
  const [typeServer, setTypeServer] = useState(1)

  useEffect(() => {
    setBranch(null);
    setPort(null);
  },[typeServer])
  
  const typesServer = [
    {id: 1, nome: 'local'},
    {id: 2, nome: 'branch'},
    {id: 3, nome: 'dev'},
  ] 

  const getProjectData = ({id}) => {
    let ambiente = acessos.find(item => item.id === id)
    const typeSelected = typesServer?.find(item => item?.id === typeServer);
    const url = ambiente?.urls?.find(item => item?.nome === typeSelected.nome)
    setProject(ambiente)
    
    const urls = []
    urls.push(url?.caminho?.replace('${email}', email)
    .replace('${tipo}', typeBranch)
    .replace('${branch}', branch)
    .replace('${porta}', port))

    let obj = {id:'', projeto: '', urls: ''}
    obj.id = ambiente.id;
    obj.projeto = ambiente.projeto;
    obj.urls = urls;
    setCustomProject(obj)
  }

  const getTypeServerData = ({id}) => {
    inicializaDadosBase()
    setTypeServer(id)
  }

  const list = async (tipoServidor, projetoSelecionado) => {
    try {
      const registros = await listAcessos(tipoServidor, projetoSelecionado);
      const arrayResult = Array.from(registros);
      setListItems(arrayResult)
    } catch (error) {
      console.error('Erro ao listar acessos:', error);
    }
  }

  const create = async () => {
    const data = {
      branch: '',
      email: '',
      projeto: '',
      tipo: null,
      porta: '',
      servidor: typeServer 
    }

    if (typeServer === 1) {
      data.email = email;
      data.projeto = project.projeto;
      data.porta = port;
    }

    if (typeServer === 2) {
      data.branch = branch;
      data.email = email;
      data.projeto = project.projeto;
      data.tipo = typeBranch
    }

    if (typeServer === 3) {
      data.email = email;
      data.projeto = project.projeto;
    }
    
    createAcesso(data)

    setTimeout(async () => {
      await list(typeServer, project.projeto);
    }, 200);
  }

  const salvaStatusCampo = (campo, value) => {
    localStorage.setItem(`link-generator-${campo}`, value);
  }

  const getStatusCampo = (campo, isNumber) => {
    if (isNumber) {
      return Number(localStorage.getItem(`link-generator-${campo}`))
    } 

    return localStorage.getItem(`link-generator-${campo}`)
  }

  const inicializaDadosBase = () => {
    const porta = getStatusCampo('port', true)
    const email = getStatusCampo('email')
    const branch = getStatusCampo('branch')

    setPort(porta)
    setEmail(email)
    setBranch(branch)
  }

  useEffect(() => {
    getProjectData(project)
  }, [branch, typeBranch, email, port])

  useEffect( () => {
    inicializaDadosBase()
    getProjectData(project)
    list()
  }, [])

  useEffect(() => {
    list(typeServer, project.projeto)
    inicializaDadosBase()
  },[typeServer, project])

  const geraUrlListagem = (email, tipo, branch, porta ) => {
    let ambiente = acessos.find(item => item.id === project.id)
    const typeSelected = typesServer?.find(item => item?.id === typeServer);
    const url = ambiente?.urls?.find(item => item?.nome === typeSelected.nome)
    
    return url?.caminho?.replace('${email}', email)
    .replace('${tipo}', tipo)
    .replace('${branch}', branch)
    .replace('${porta}', porta)
  }

  const renderItem = (item) => {

    if (item.tipo_servidor === 1) {
      return (
        <Grid.RowStart>
          <ItemList>{item.projeto}</ItemList>
          <ItemList >{item.porta}</ItemList>
          <ItemList width={'350px'}>({item.email})</ItemList>
        </Grid.RowStart>
      )
    }

    if (item.tipo_servidor === 2) {
      return (
        <Grid.RowStart>
          <ItemList>{item.projeto}</ItemList>
          <ItemList>{item.tipo}</ItemList>
          <ItemList>{item.branch}</ItemList>
          <ItemList width={'350px'}>({item.email})</ItemList>
        </Grid.RowStart>
      )
    }

    if (item.tipo_servidor === 3) {
      return (
        <Grid.RowStart>
          <ItemList>{item.projeto}</ItemList>
          <ItemList>DEV</ItemList>
          <ItemList width={'350px'}>({item.email})</ItemList>
        </Grid.RowStart>
      )
    }

  }

  return (
    <Grid.Container>
      <Grid.RowStart pt={'30px'}>
        <CxSelect
          label='Tipo servidor'
          callback={getTypeServerData}
          items={typesServer}
          width={'135px'}
        />

        { typeServer === 1 && typeServer !== 3 &&
          <CxInput
            label='Porta'
            placeholder='Porta'
            state={port}
            setState={(value) => {
              salvaStatusCampo('port', value)
              setPort(value)
            }}
            type='text'
            width={'110px'}
          />
        }

        { typeServer !== 3 && typeServer !== 1 && 
          <CxInput
            label='Branch'
            placeholder='Branch name'
            state={branch}
            setState={(value) => {
              salvaStatusCampo('branch', value)
              setBranch(value)
            }}
            type='text'
            width={'112px'}
          />
        }

        <CxInput
          label='E-mail'
          placeholder='Email'
          state={email}
          setState={(value) => {
            salvaStatusCampo('email', value)
            setEmail(value)
          }}
          type='text'
          width={ typeServer !== 3 ?'165px': '316px'}
        />

        <CxSelect
          label='Projeto'
          callback={getProjectData}
          items={ambientes}
          width={'140px'}
        />
      </Grid.RowStart>

      <Grid.RowSpaceBetween>
        <Grid.Container>
          <Grid.RowStart>
            { typeServer === 2 && (
              <>
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
              </>
            )}
          </Grid.RowStart>
        </Grid.Container>
        <Grid.Container pt={'12px'} >
          <CxIconBtn 
            title={'Feature'}
            width={'40px'}
            border={true}
            image={saveLink}
            onClick={() => create()}
          />
        </Grid.Container>
      </Grid.RowSpaceBetween>

      <Grid.RowStart>
        <SimpleList.Container>
          {
            customProject?.urls?.map((item) => {
              return (
                <SimpleList.Item key={uuidv4()}>
                  <Grid.RowSpaceBetween>
                    <Grid.RowStart pt="10px">
                        <TextLimiter width={'450px'}>
                          {item}
                        </TextLimiter>
                      </Grid.RowStart>
                      
                      <Grid.RowEnd>
                        <CxAction.Copy onClick={() => copyClipboard(item)}/>
                        <CxAction.Redirect url={item}/>
                      </Grid.RowEnd>
                  </Grid.RowSpaceBetween>
                </SimpleList.Item>
              )
            })
          }
        </SimpleList.Container>
      </Grid.RowStart >

      <Table mt={'25px'}>
        <Grid.RowStart >
          <SimpleList.Container>
            {
              listItems?.map((item, index) => {

                return (
                  <SimpleList.Item key={uuidv4()} active={(index % 2 == 0)}>
                    <Grid.RowSpaceBetween>
                      <Grid.RowStart pl={'10px'}>
                        {renderItem(item)}
                      </Grid.RowStart>
                        
                      <Grid.RowEnd>
                        <CxAction.Copy onClick={() => copyClipboard(geraUrlListagem(item.email, item.tipo, item.branch, item.porta))}/>
                        <CxAction.Redirect url={geraUrlListagem(item.email, item.tipo, item.branch, item.porta)}/>
                      </Grid.RowEnd>
                    </Grid.RowSpaceBetween>
                  </SimpleList.Item>
                )
              })
            }
          </SimpleList.Container>
        </Grid.RowStart>
      </Table>
    </Grid.Container>
  )
}