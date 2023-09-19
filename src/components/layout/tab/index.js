import { useState } from "react"
import { Container, ItemContainer, TabBody, TabItem } from "./tab-components"

export const Tab = ({items, children}) => {

  const [ativeTab, setActiveTab] = useState(0);

  return (
    <Container>
      <ItemContainer>
        {
          items && items.map((item, index) => {
            return (
              <TabItem 
                onClick={()=> setActiveTab(index)}
                active={index === ativeTab}
              >
                {item.nome}
              </TabItem>
            )
          })
        }

        {
          !items && children.map((item, index) => {
            return (
              <TabItem  
                onClick={()=> setActiveTab(index)}
                active={index === ativeTab}
              >
                {item.props.title}
              </TabItem>
            )
          })
        }

      </ItemContainer>
      <TabBody>
        {children[ativeTab] ?? 'Sem especificação'}
      </TabBody>
    </Container>
  )
}


export const TabItemComponent = ({title, children}) => (<>{children}</>)

export const TabComponent = {
  Container: Tab,
  Item: TabItemComponent,
}