import { useEffect, useState } from 'react'
import { Input } from 'components/molecules'
import { Title, Button } from 'components/atoms'
import { createItem, updateItem, deleteItem } from 'services/request'
import {
  ModalBackgroundContainer,
  ModalContentContainer,
  ModalHeaderContainer,
  ModalCloseButton
} from './styles'

export const Modal = ({ onClose, item }) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)

  const validateBeforeSave = () => {
    if (name.length < 3) {
      alert('Nome tem que ter mais de 3 caracteres')
      return
    }
    if (quantity < 1) {
      alert('Quantidade não pode ser menor do que 1')
      return
    }
    return true
  }

  const callAddItem = async () => {
    const validate = validateBeforeSave()
    if (validate) {
      const result = await createItem({ name, quantity: Number(quantity) })
      if (!result?.error) {
        alert('Item salvo com sucesso')
        onClose()
      }
    }
  }

  const callUpdateItem = async () => {
    const validate = validateBeforeSave()
    if (validate) {
      const result = await updateItem(item?._id, {
        name,
        quantity: Number(quantity),
        checked: item?.checked
      })
      if (!result?.error) {
        alert('Item atualizado com sucesso')
        onClose()
      }
    }
  }

  const callDeleteItem = async () => {
    const result = await deleteItem(item?._id)
    if (!result?.error) {
      alert('Item deletado com sucesso')
      onClose()
    }
  }

  useEffect(() => {
    if (item?.name && item?.quantity) {
      setName(item?.name)
      setQuantity(item?.quantity)
    }
  }, [item])

  return (
    <ModalBackgroundContainer>
      <ModalContentContainer>
        <ModalHeaderContainer>
          <Title>{item ? 'Editar item' : 'Adicionar novo item'}</Title>
          <ModalCloseButton onClick={onClose} />
        </ModalHeaderContainer>
        <Input
          onChange={(text) => setName(text)}
          value={name}
          label="Nome:"
          placeholder="Ex: Monster"
        />
        <Input
          onChange={(text) => setQuantity(text)}
          value={quantity}
          label="Quantidade:"
          placeholder="Digite a quantidade"
          type="number"
        />
        <Button onClick={item ? callUpdateItem : callAddItem}>
          {item ? 'Atualizar' : 'Adicionar'}
        </Button>
        {item && (
          <Button icon="trash" variant="outline" onClick={callDeleteItem}>
            Deletar item
          </Button>
        )}
      </ModalContentContainer>
    </ModalBackgroundContainer>
  )
}
