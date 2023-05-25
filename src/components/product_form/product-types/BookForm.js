import InputBase from "../subcomponents/InputBase";

export default function Furniture({ product, onChange }) {

  return (
    <>
      {
        [`Weight`].map(id => (
          <InputBase id='Book' key={id} label={id + " (KG)"}>
            <input type='text' 
              placeholder={`Insert ${id} in kilograms (number only)`} 
              required
              onChange={e => onChange('weight', e.target.value)} 
              onInput={e => e.target.setCustomValidity('')} 
              onInvalid={e => e.target.setCustomValidity("Setting the book's weight is required")}
            />
          </InputBase>
        ))
      }
      <InputBase>
        <span> If necessary, please mark decimals in the weight field with a dot. <br /> <br />e.g:  3.35</span>
      </InputBase>
    </>
  );

}
