import { CxInput } from "../../inputs/cx-input"
import { Actions, ActionsLink, ButtonAdd, Container, FlexContainer, FlexContainerColumn, FlexContainerRow, FlexContainerRowCenter, Icon, InputGroup, LinkPreview, LinkPreviewContainer, LinkPreviewLabel, TitleContainer, TypeAction, TypeImage } from "./api-form-components"
import AdicionarLink from "./../../../images/icons/adicionar-link.png"
import Copy from "./../../../images/icons/link-de-copia.png"
import Redirect from "./../../../images/icons/sair-do-canto-superior-direito.png"
import Hotfix from "./../../../images/icons/hotfix.png"
import Feature from "./../../../images/icons/feature.png"
import { useState } from "react"

export const ApiForm = () => {
  
  const [newLink, setNewLink] = useState('')
  const [textoCopiado, setTextoCopiado] = useState(false);

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


  return (
    <Container>
       <TitleContainer>
          <h3>Geração de branch dinâmicas</h3>
          <FlexContainerRowCenter>
            <TypeAction>
              <TypeImage src={Hotfix} />
            </TypeAction>
            <TypeAction>
              <TypeImage src={Feature} />
            </TypeAction>
          </FlexContainerRowCenter>
        </TitleContainer>
      <InputGroup>
        <CxInput 
          type='text' 
          label={"branch"} 
          placeholder={'Nome da branch'}
          onChange={(e) => setNewLink(e.target.value)} 
        />
        <ButtonAdd>
          <Icon src={AdicionarLink}/>
        </ButtonAdd>
      </InputGroup>
      <LinkPreviewContainer>
        {
          newLink && (
            <FlexContainerColumn>
              <FlexContainerRow>
                <div>
                  <LinkPreviewLabel> SECRETARIA:</LinkPreviewLabel> 
                  <LinkPreview>{`https://${newLink}.devops.grancursosonline.com.br/ms-secretaria/v1`}</LinkPreview>
                </div>
                <div>
                  <Actions src={Copy} onClick={() => copiarParaAreaDeTransferencia(`https://${newLink}.devops.grancursosonline.com.br/ms-secretaria/v1`)} />
                  <ActionsLink href={`https://${newLink}.devops.grancursosonline.com.br`} target="_blank">
                    <Actions src={Redirect} />
                  </ActionsLink>
                </div>
              </FlexContainerRow>

              <FlexContainerRow>
                <div>
                  <LinkPreviewLabel> CAMPUS:</LinkPreviewLabel> 
                  <LinkPreview>{`https://${newLink}.devops.grancursosonline.com.br/ms-campus/v1`}</LinkPreview>
                </div>
                <div>
                  <Actions src={Copy} onClick={() => copiarParaAreaDeTransferencia(`https://${newLink}.devops.grancursosonline.com.br/ms-campus/v1`)} />
                  <ActionsLink href={`https://${newLink}.devops.grancursosonline.com.br`} target="_blank">
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