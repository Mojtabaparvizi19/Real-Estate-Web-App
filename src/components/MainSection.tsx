import { Box, Button, Heading, Icon, Input } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useDataStore, { SearchQuery } from "../Zstore/store";

function MainSection() {
  const setType = useDataStore((select) => select.setType);
  const type = useDataStore((select) => select.filterQuery.type);

  const setLocation = useDataStore((select) => select.setLocation);
  const setMinPrice = useDataStore((select) => select.setMinPrice);
  const setMaxPrice = useDataStore((select) => select.setMaxPrice);

  const { register, handleSubmit } = useForm();
  const btnTypes = ["rent", "buy"];
  const navigate = useNavigate();

  return (
    <Box padding={2}>
      <Box paddingTop={"100px"}>
        <Heading color={"gray"} fontSize={"40px"}>
          Search Real Estate & Find Your Dream Home
        </Heading>

        {btnTypes.map((item, index) => (
          <Button
            key={index}
            onClick={() => {
              setType(item);
            }}
            borderRadius={0}
            border={"solid 0.5px gray"}
            bgColor={type === item ? "gray" : ""}
          >
            {item}
          </Button>
        ))}

        <Box maxW={"830px"} padding={2} border={"solid 1px gray"}>
          <form
            onSubmit={handleSubmit((data: SearchQuery) => {
              navigate("/list");
              setLocation(data.location!);
              setMinPrice(data.minPrice!);
              setMaxPrice(data.maxPrice!);
              console.log(data);
            })}
            style={{ display: "flex" }}
          >
            <Input
              {...register("location")}
              id="location"
              _placeholder={{
                color: "gray.500",
              }}
              color={"gray.500"}
              placeholder="City Location..."
            />
            <Input
              id="minPrice"
              {...register("minPrice")}
              _placeholder={{
                color: "gray.500",
              }}
              color={"black"}
              placeholder="Min Price"
            />
            <Input
              {...register("maxPrice")}
              id="maxPrice"
              _placeholder={{
                color: "gray.500",
              }}
              color={"gray.500"}
              placeholder="MaxPrice"
            />
            <Button maxW={"50px"} marginX={2} fontSize={"10px"} type="submit">
              <Icon as={FaSearch} />
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default MainSection;
