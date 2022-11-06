
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowItems(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<TextField source="name" />
<ReferenceField source="ordersid" reference="orders" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}