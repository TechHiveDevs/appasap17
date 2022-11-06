
import { 
  Create,
  SimpleForm,
  
TextInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateItems(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="name" variant="outlined"   />
<ReferenceInput label="orders" source="ordersid" reference="orders">
        <AutocompleteInput variant="outlined" /* optionText="orders"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
