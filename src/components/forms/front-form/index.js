import { CxInput } from "../../inputs/cx-input"
import { Actions, ActionsLink, ButtonAdd, Container, FlexContainerColumn, FlexContainerRow, FlexContainerRowCenter, Icon, InputGroup, LinkPreview, LinkPreviewContainer, LinkPreviewLabel, TitleContainer, TypeAction, TypeImage } from "./front-form-components"
import AdicionarLink from "./../../../images/icons/adicionar-link.png"
import Copy from "./../../../images/icons/link-de-copia.png"
import Redirect from "./../../../images/icons/sair-do-canto-superior-direito.png"
import Hotfix from "./../../../images/icons/hotfix.png"
import Feature from "./../../../images/icons/feature.png"
import { useState } from "react"

export const FrontEndForm = () => {
  
  const [branch, setBranch] = useState('')
  const [email, setEmail] = useState('')
  const [tipo, setTipo] = useState('')
  const [newLink, setNewLink] = useState('')
  const [textoCopiado, setTextoCopiado] = useState(false);
  const urlBranchDinamica = 'https://feature-es-api-auth.devops.grancursosonline.com.br/ms-campus/v1/auth/authorization/${email}?xclient=JDJ5JDEwJEJqck9NVE5SYXFMQ1RFMTF3QlM4ZWVuOHpRQkhTV3RLZmYyUmVBREhnVUd1Wmo4LmZxMUFX&redirect_url=https://${type}${branch}.devops.grancursosonline.com.br/${sistema}'

  const copiarParaAreaDeTransferencia = (texto) => {
    // Cria um elemento de input oculto
    const input = document.createElement('input');
    input.value = texto;
    document.body.appendChild(input);

    // Seleciona o texto dentro do input
    input.select();
    input.setSelectionRange(0, 99999); // Para seleção em navegadores móveis

    // Copia o texto para a área de transferência
    document.execCommand('copy');

    // Remove o elemento de input
    document.body.removeChild(input);

    // Atualiza o estado para indicar que o texto foi copiado
    setTextoCopiado(true);
  };

  const getUrlFinal = (sistema) => {

    let sistemaAux = 'autenticar?code='

    if (sistema === 'campus') {
      sistemaAux = 'graduacao/autenticar/'
    }

    return urlBranchDinamica
      .replace('${email}', email)
      .replace('${type}', tipo + '-')
      .replace('${branch}', branch)
      .replace('${sistema}', sistemaAux)
  }

  return (
    <Container>
      
      <TitleContainer>
        <h3>Geração de link do tipo {tipo}</h3>
        <FlexContainerRowCenter>
          <TypeAction onClick={() => setTipo('hotfix')}>
            <TypeImage src={Hotfix} />
          </TypeAction>
          <TypeAction onClick={() => setTipo('feature')}>
            <TypeImage src={Feature} />
          </TypeAction>
        </FlexContainerRowCenter>
      </TitleContainer>
      
      <InputGroup>
        <CxInput 
          type='text' 
          label={"Branch"} 
          placeholder={'email'}
          onChange={(e) => setBranch(e.target.value)} 
        />
        <CxInput 
          type='text' 
          label={"E-mail"} 
          placeholder={'email'}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <ButtonAdd>
          <Icon src={AdicionarLink}/>
        </ButtonAdd>
      </InputGroup>
      <LinkPreviewContainer>
        {
          branch && (
            <FlexContainerColumn>
              <FlexContainerRow>
                <div>
                  <LinkPreviewLabel> SECRETARIA:</LinkPreviewLabel> 
                  <LinkPreview>{getUrlFinal()}</LinkPreview>
                </div>
                <div>
                  <Actions src={Copy} onClick={() => copiarParaAreaDeTransferencia(getUrlFinal())} />
                  <ActionsLink href={getUrlFinal()} target="_blank">
                    <Actions src={Redirect} />
                  </ActionsLink>
                </div>
              </FlexContainerRow>

              <FlexContainerRow>
                <div>
                  <LinkPreviewLabel> CAMPUS:</LinkPreviewLabel> 
                  <LinkPreview>{getUrlFinal('campus')}</LinkPreview>
                </div>
                <div>
                  <Actions src={Copy} onClick={() => copiarParaAreaDeTransferencia(getUrlFinal('campus'))} />
                  <ActionsLink href={getUrlFinal('campus')} target="_blank">
                    <Actions src={Redirect} />
                  </ActionsLink>
                </div>
              </FlexContainerRow>
            </FlexContainerColumn>
          )
        }
      </LinkPreviewContainer>
    </Container>
  )
}