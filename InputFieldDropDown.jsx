import React from "react";
import {TextField, option} from "@material-ui/core";
import "./global.css"
export const InputFieldDropDown = () => {
  
    const [currency, setCurrency] = React.useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };




    const currencies = [
        {
          value: 'CNI',
          label: 'CNI',
        },
        {
          value: 'DNI',
          label: 'DNI',
        },
        {
          value: 'Passporte',
          label: 'Passporte',
        },
        
      ];
      
  
    return (
        <TextField
        id="outlied"
        select
        value={currency}
        variant="outlined"
        className = "inputRounded"
        placeholder="ID"
        label = "IDTYPE"
        onChange={handleChange}
        margin = "dense"
    
        style = {
            {
                width:"70%",
          height:"65px"

            }
        }
        

        InputLabelProps={{
          style: {
            fontSize: 14,
            backgroundColor: "#FFF",
            padding: "0 10px",
          
            color: "#383838",
            
          },
        }}
        inputProps={{
          style: {
            width: "100%",
            fontSize: 12,
            height:44,
            fontWeight:"bold"
          },
        }}
        FormHelperTextProps={{
          style:{
              lineHeight:"relative",
          }
          
        }}


        

      >
        {currencies.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    )


}