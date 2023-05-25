import InputBase from "../subcomponents/InputBase";

export default function Furniture({ product, onChange }) {

  return (
    <>
      {
        [`Size`].map(id => (
          <InputBase id='DVD' key={id} label={id + " (MB)"}>
            <input type='text' 
            placeholder={`Insert ${id} in megabites (number only)`} 
            required
            onChange={e => onChange('size', e.target.value)} 
            onInput={e => e.target.setCustomValidity('')} 
            onInvalid={e => e.target.setCustomValidity("Setting the DVD's size is required")}
          />
          </InputBase>
        ))
      }
      <InputBase>
        <span> Please calculate any necessary unit conversion to ensure the value is inserted in megabites.</span>
      </InputBase>
    </>
  );

}
