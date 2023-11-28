import { getUsers } from "@/redux/sevices/api";

export const User = async ({ userId }) => {
  const user = await getUsers();
  return (
    <div>
      {user.map(({ id, name }) => {
        if (id === userId) {
          return <h3 key={id}>{name}</h3>;
        }
      })}
    </div>
  );
};
