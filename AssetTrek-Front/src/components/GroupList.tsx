import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

interface IItem {
  name: string;
  quantity: number;
}

interface IListGroupProps {
  items: IItem[];
}

function GroupList(props: IListGroupProps) {
  //let listItems = props;
  // const [listItems, setListItems] = useState();
  // setListItems(props);

  const removeAsset = async (name: string) => {
    await axios.post("https://localhost:7071/Asset/remove-assets", {
      name: name,
    });
  };

  return (
    <Table striped bordered hover variant="white">
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item) => {
          return (
            <>
              <tr>
                <th>{item.quantity}</th>
                <th>{item.name}</th>
                <th key={item.name}>
                  <Button
                    variant="danger"
                    onClick={() => {
                      removeAsset(item.name);
                      console.log(item.name);
                    }}
                  >
                    Remove
                  </Button>
                </th>
              </tr>
            </>
          );
        })}
      </tbody>
    </Table>
  );
}

export default GroupList;
