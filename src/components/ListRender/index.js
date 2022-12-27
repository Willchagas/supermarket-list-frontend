import { ListCard } from "../ListCard";

export const ListRender = ({ list }) => {
  if (list?.length === 0) {
    return (
      <h3>
        Sua lista está vazia, adicione um novo item clicando no botão de
        "Adicionar".
      </h3>
    );
  }

  return (
    <div>
      {list.map((item) => (
        <ListCard item={item} key={item?._id} />
      ))}
    </div>
  );
};
