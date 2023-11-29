import { OrderCounter } from "../OrderCounter/component";
export const Dish = ({ nameDish, price, ingredients, id, theme }) => {
  return (
    <div>
      <div>
        <h3>{nameDish}</h3>
        <ul >
          {ingredients.map((ingredient) => (
            <li key={ingredient.id} >
              {ingredient}
            </li>
          ))}
        </ul>
        <p>{price} $</p>
      </div>
      <OrderCounter />
    </div>
  );
};
