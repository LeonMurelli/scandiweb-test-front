import InputBase from "../subcomponents/InputBase";

export default function Furniture({ product, onChange }) {

  return (
    <>
      {
        [`Height`, `Width`, `Length`].map(id => (
          <InputBase id='Furniture' key={id} label={id + " (CM)"}>
            <input 
              type='text' 
              placeholder={`Insert ${id} in centimeters (number only)`} 
              required
              onChange={e => onChange(id.toLowerCase(), e.target.value)} 
              onInput={e => e.target.setCustomValidity('')} 
              onInvalid={e => e.target.setCustomValidity(`Setting the ${id.toLowerCase()}  is required`)}
            />
          </InputBase>
        ))
      }
      <InputBase>
        <span> Please insert each measurement in its respective field. It will be displayed as H x W x L at the product list.</span>
      </InputBase>
    </>
  );

}
