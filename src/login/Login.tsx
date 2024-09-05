import { SimpleGrid, Card, Input, FormControl, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useDataStore from "../Zstore/store";

interface Prop {
  sendData: (data: object) => void;
}

const schema = z.object({
  username: z
    .string()
    .min(6, { message: "Username must be at least 6 character" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters" }),
});
type FormData = z.infer<typeof schema>;

function Login({ sendData }: Prop) {
  const navigate = useNavigate();
  const setLoggedIn = useDataStore((select) => select.setLogged);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <div>
      <SimpleGrid
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"100px"}
        height={"400px"}
        columns={1}
      >
        <Card
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"280px"}
          width={"400px"}
        >
          <form
            onSubmit={handleSubmit((data: FieldValues) => {
              sendData(data);
              navigate("/list");
              setLoggedIn(true);
            })}
          >
            <FormControl id="username">UserName</FormControl>
            <Input id="username" {...register("username")} />
            {errors.username && (
              <p className="text-danger">{errors.username.message}</p>
            )}

            <FormControl id="password">Passwork</FormControl>
            <Input type="password" id="password" {...register("password")} />
            {errors.password && (
              <p className="text-danger">{errors.password.message}</p>
            )}

            <Button type="submit" className="mt-2" maxW={"50px"}>
              Login
            </Button>
          </form>
        </Card>
      </SimpleGrid>
    </div>
  );
}

export default Login;
