
import { 
  Edit,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditItems(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="name" variant="outlined"   />
<ReferenceInput label="orders" source="ordersid" reference="orders">
        <AutocompleteInput variant="outlined" /* optionText="orders"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}