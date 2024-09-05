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

function Profile() {
  const { register, handleSubmit } = useForm<CardProp>();
  const [isUpdating, setUpdating] = useState(false);
  const savedItems = useDataStore((select) => select.savedItems);
  const setSavedItems = useDataStore((select) => select.setSavedItems);
  const [userName, setUsername] = useState("");
  const userNameRef = useRef<HTMLInputElement>(null);
  const avatarRef = useRef<HTMLInputElement>(null);

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
                if (userNameRef.current !== null) {
                  setUsername(userNameRef.current.value);
                  console.log(userNameRef.current.value);
                }
              }}
            >
              <HStack justifyContent={"space-between"}>
                <Heading fontSize={"30px"}> User Information</Heading>

                <Button
                  type={isUpdating ? "submit" : "button"}
                  onClick={() => {
                    setTimeout(() => {
                      setUpdating(!isUpdating);
                    }, 10);
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
                </HStack>

                <HStack className="m-2">
                  <Box>
                    Username: <Text>{userName}</Text>
                  </Box>
                  {isUpdating && <Input maxWidth={"200px"} ref={userNameRef} />}
                  {/* <Input ref={userNameRef} /> */}
                </HStack>

                <HStack className="m-2">
                  <Box>E-mail</Box>
                  {isUpdating && <Input maxWidth={"200px"} />}
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
