import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ShopBadge from "./Badge";
import { useSelector, useDispatch } from "react-redux";
import "./Drawer.css";
import {
  addToCarts,
  decrease,
  addMore,
  remove,
  clear,
} from "../redux-shop/actions_shop/Action_shop";

// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

export default function ShopDrawer() {
  //redux
  let addedItems = useSelector((state) => state.cartItems);

  console.log("draweritems", addedItems);

  let dispatch = useDispatch();

  let addMore_dispatch = (parameter) => {
    dispatch(addMore(parameter));
  };

  let decrease_dispatch = (parameter) => {
    dispatch(decrease(parameter));
  };

  let remove_dispatch = (parameter) => {
    dispatch(remove(parameter));
  };

  let clear_dispatch = (parameter) => {
    dispatch(clear(parameter));
  };

  //calculate the total price

  let totalprice = addedItems.reduce(
    (accumulator, currentvalue) =>
      accumulator + currentvalue.price * currentvalue.quantity,
    0
  );
  //rightside drawer

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  //  click any button to close
  //  onClick={toggleDrawer(anchor, false)}
  //click any button to open
  // onClick={toggleDrawer(anchor, true)}

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 600 }}
      role="presentation"
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div className="basketContainer">
          <div className="topBox">
            <h2 className="basketBanner">
              My Basket <span>({addedItems.length} items)</span>
            </h2>
            <div className="topLeft">
              <button
                className="closeBtn"
                onClick={toggleDrawer("right", false)}
              >
                Close
              </button>
              <button
                className="clearBsk"
                onClick={() => {
                  clear_dispatch();
                }}
              >
                Clear Basket
              </button>
            </div>
          </div>

          {/* display items useSelector AND useDispatch */}
          <div className="cartInforBox">
            <ul className="addedItem">
              {addedItems.map((items, index) => (
                <li key={index} className="productBox">
                  <div className="adjustQuan">
                    <button
                      className="addBtn"
                      onClick={() => {
                        addMore_dispatch(items.parameter);
                      }}
                    >
                      +
                    </button>
                    <button
                      className="reduceBtn"
                      onClick={() => {
                        decrease_dispatch(items.parameter);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <div className="productInfor">
                    <div className="itemImg">
                      <img
                        src={items.img}
                        className="cartImage"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "contain",
                        }}
                      ></img>
                    </div>
                    <div className="itemDetails">
                      <h3 className="itemName">{items.name}</h3>
                      <div className="shopDetail">
                        <div className="quantity">
                          Quantity:{items.quantity}
                        </div>
                        <div className="size">Size:{items.size}</div>
                        <div className="selectColor">
                          <span>Color:</span>
                          <button
                            className="mycolorCircle"
                            style={{ backgroundColor: items.color }}
                          ></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="itemPrice">${items.price}</div>
                  <button
                    className="removeBtn"
                    onClick={() => remove_dispatch(items.parameter)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {addedItems.length === 0 ? (
            <div className="empty">
              <h3>Your basket is empty</h3>
            </div>
          ) : null}

          <Divider></Divider>
          <div className="totalBox">
            <div className="sumBox">
              <h4 className="sumText">Subtotal Amount:</h4>
              <div className="calSum">${totalprice}</div>
            </div>
            <button className="checkOutBtn">Checkout</button>
          </div>
        </div>
      </List>
    </Box>
  );

  // <ShopBadge></ShopBadge>
  //onClose={toggleDrawer(anchor, false)
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <ShopBadge></ShopBadge>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
