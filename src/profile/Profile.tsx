import {
  SimpleGrid,
  Box,
  HStack,
  Button,
  Heading,
  Card,
  Input,
  Text,
} from "@chakra-ui/react";
import HiddenMenu from "../components/HiddenMenu";
import useDataStore from "../Zstore/store";
import CardItem from "../components/CardItem";
import { useForm } from "react-hook-form";
import { CardProp } from "../components/HomeCard";
import { useRef, useState } from "react";

interface Props {
  avatar: string;
  username: string;
  email: string;
}

function Profile() {
  const { register, handleSubmit } = useForm<CardProp>();
  const [isUpdating, setUpdating] = useState(false);

  const savedItems = useDataStore((select) => select.savedItems);
  const setSavedItems = useDataStore((select) => select.setSavedItems);

  const userNameRef = useRef<HTMLInputElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [info, updateInfo] = useState<Props>({} as Props);

  return (
    <Box>
      <HiddenMenu />
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        templateColumns={{
          base: "1fr",
          md: "2fr 1fr",
        }}
        spacing={3}
      >
        <Box padding={4} height={"100%"}>
          <Card padding={3}>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                // if (userNameRef.current !== null) {
                //   updateInfo({ ...info, username: userNameRef.current.value });
                // }
                // if (emailRef.current !== null) {
                //   updateInfo({ ...info, email: emailRef.current.value });
                // }

                // if (avatarRef.current !== null) {
                //   updateInfo({ ...info, avatar: avatarRef.current.value });
                // }
                updateInfo({
                  email: emailRef.current && emailRef.current.value,
                  avatar: avatarRef?.current.value,
                  username: userNameRef?.current.value,
                });

                console.log(info);
              }}
            >
              <HStack justifyContent={"space-between"}>
                <Heading fontSize={"30px"}> User Information</Heading>

                <Button
                  type={isUpdating ? "submit" : "button"}
                  onClick={() => {
                    setTimeout(() => {
                      setUpdating(!isUpdating);
                    }, 100);
                  }}
                  className="me-3"
                  size={"sm"}
                  colorScheme="yellow"
                >
                  {isUpdating ? "update" : " Update Profile"}
                </Button>
              </HStack>

              <Box padding={5}>
                <HStack className="m-2">
                  <Box>Avatar : </Box>
                  {isUpdating && (
                    <Input maxWidth={"200px"} id="avatar" ref={avatarRef} />
                  )}
                  <Text>{info.avatar}</Text>
                </HStack>

                <HStack className="m-2">
                  <Box>
                    Username: <Text>{info.username}</Text>
                  </Box>
                  {isUpdating && <Input maxWidth={"200px"} ref={userNameRef} />}
                  {/* <Input ref={userNameRef} /> */}
                </HStack>

                <HStack className="m-2">
                  <Box>E-mail</Box>
                  {isUpdating && <Input ref={emailRef} maxWidth={"200px"} />}
                  <Text>{info.email}</Text>
                </HStack>
              </Box>
            </form>
          </Card>

          <Box paddingX={2} className="mt-5">
            <HStack justifyContent={"space-between"}>
              <Heading fontSize={"20px"}>My List</Heading>
            </HStack>
          </Box>
          {savedItems.length > 0 &&
            savedItems.map((item) => <CardItem card={item} key={item.id} />)}
        </Box>
        <Box padding={5}>
          <Card borderRadius={10} padding={5}>
            <Heading fontSize={"30px"}>Add New Listing</Heading>

            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
                setSavedItems(data);
              })}
              className="container"
            >
              <Input
                id="title"
                {...register("title")}
                placeholder="Title..."
                className="mt-2"
              />
              <Input
                id="address"
                {...register("address")}
                placeholder="Address..."
                className="mt-2"
              />
              <Input
                id="price"
                {...register("price")}
                placeholder="Price..."
                className="mt-2"
              />
              <Input
                id="img"
                {...register("img")}
                placeholder="image URL"
                className="mt-2"
              />
              <Input
                id="bedroom"
                {...register("bedroom")}
                placeholder="How many bedrooms?"
                className="mt-2"
              />
              <Input
                id="bathroom"
                {...register("bathroom")}
                placeholder="How many bathrooms?"
                className="mt-2"
              />
              <Input
                id="size"
                {...register("size")}
                placeholder="size..."
                className="mt-2"
              />
              <Input
                id="description"
                {...register("description")}
                placeholder="description"
                className="mt-2"
              />
              <Input
                id="latitude"
                {...register("latitude")}
                placeholder="latitude..."
                className="mt-2"
              />
              <Input
                id="longitude"
                {...register("longitude")}
                placeholder="longitude..."
                className="mt-2"
              />

              <Button
                type={"submit"}
                className="mt-3 "
                size={"sm"}
                colorScheme="yellow"
              >
                Add +
              </Button>
            </form>
          </Card>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Profile;
