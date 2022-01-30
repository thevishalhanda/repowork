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
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];
      
  
    return (
        <TextField
        id="outlined-select-currency-native"
        select
        label="Native select"
        value={currency}
        variant="outlined"
        className = "inputRounded"
        placeholder="ID"
        size = "small"
        onChange={handleChange}
        error = {true}
        helperText = "HELLO SIR"
        style = {
            {
                width:"70%",
          height:"65px"

            }
        }
        SelectProps={{
          native: true,
        }}

        InputLabelProps={{
          style: {
            fontSize: 16,
            backgroundColor: "#FFF",
            paddingLeft: 4,
            paddingRight: 4,
            color: "#383838",
            margin:"0% 0% 0% 0%"
          },
        }}
        inputProps={{
          style: {
            width: "100%",
            fontSize: 14,
            height: 45,
            padding: "0 14px",
            fontWeight: "bold",
          },
        }}
        FormHelperTextProps={{
          style:{
              lineHeight:1
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