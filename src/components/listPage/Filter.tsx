import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Input,
  HStack,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import useDataStore, { SearchQuery } from "../../Zstore/store";

function Filter() {
  const setMinPrice = useDataStore((select) => select.setMinPrice);
  const setMaxPrice = useDataStore((select) => select.setMaxPrice);
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form
        onSubmit={handleSubmit((data: SearchQuery) => {
          setMinPrice(data.minPrice!);
          setMaxPrice(data.maxPrice!);
        })}
        className="container"
      >
        <Input placeholder="Location" />
        <div>
          <HStack marginTop={2}>
            <Menu>
              <MenuButton
                minW={"100px"}
                as={Button}
                rightIcon={<FaChevronDown />}
              >
                Type
              </MenuButton>
              <MenuList>
                <MenuItem>Rent</MenuItem>
                <MenuItem>Buy</MenuItem>
              </MenuList>
            </Menu>

            <Input
              {...register("minPrice")}
              id="minPrice"
              placeholder="Min Price"
            />
            <Input
              {...register("maxPrice")}
              id="maxPrice"
              placeholder="Max Price"
            />
          </HStack>
          <Button type="submit" className="mt-2">
            Filter
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Filter;
