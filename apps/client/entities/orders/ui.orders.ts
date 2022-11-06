
import show from "./show.orders";
import create from "./create.orders";
import edit from "./edit.orders";
import list from "./list.orders";

export default { 
  name: "orders",
  label: "orders",
  hide: false,
  create,
  edit,
  list,
  show,
}