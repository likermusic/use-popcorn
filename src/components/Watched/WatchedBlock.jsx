import { Box } from "../Box/Box";
import { Details } from "./Details";
import { WatchedItem } from "./WatchedItem";
import { Summary } from "./Summary";
import { List } from "../List/List";

export function WatchedBlock({ id }) {
  return (
    <Box>
      {id && <Details id={id} />}
      <Summary />
      <List>
        <WatchedItem />
      </List>
    </Box>
  );
}
