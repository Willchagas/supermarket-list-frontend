import { useState, useEffect } from 'react'
import { getList, updateItem } from 'services/request'
import { Button, ListRender, Loader, Modal, Title } from 'components'
import {
  ScreenContainer,
  ContentContainer,
  Header,
  TitleContainer,
  LogoImage,
  HeaderButtonContainer,
  ListContainer
} from './styles'

export const ListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const [listData, setListData] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  const loadListItems = async () => {
    setLoading(true)
    const result = await getList()
    setListData(result)
    setLoading(false)
  }

  useEffect(() => {
    loadListItems()
  }, [])

  const onClickAddButton = () => {
    setSelectedItem(null)
    setModalVisible(true)
  }

  const onClickCloseButton = () => {
    setModalVisible(false)
    loadListItems()
    setSelectedItem(null)
  }

  const onEditItem = (item) => {
    setSelectedItem(item)
    setModalVisible(true)
  }

  const onCheckItem = async (item) => {
    const result = await updateItem(item?._id, {
      name: item.name,
      quantity: Number(item.quantity),
      checked: !item.checked
    })

    if (!result.error) {
      await loadListItems()
    }
  }

  return (
    <ScreenContainer>
      <ContentContainer>
        <Header>
          <TitleContainer>
            <LogoImage />
            <Title fontSize={32} lineHeight={30} ml={12}>
              Lista Supermercado
            </Title>
          </TitleContainer>
          <HeaderButtonContainer>
            <Button onClick={onClickAddButton}>
              {window.innerWidth <= 420 ? '+' : 'Adicionar'}
            </Button>
          </HeaderButtonContainer>
        </Header>
        <ListContainer>
          {loading ? (
            <Loader />
          ) : (
            <ListRender
              onCheckItem={onCheckItem}
              onEdit={onEditItem}
              list={listData}
            />
          )}
        </ListContainer>
      </ContentContainer>
      {modalVisible && (
        <Modal item={selectedItem} onClose={onClickCloseButton} />
      )}
    </ScreenContainer>
  )
}
