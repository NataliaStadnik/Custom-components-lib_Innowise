import { useState } from 'react';
import './App.css';
import { Button, Checkbox, Modal, Select, Switch, TextField } from 'ui-components_innowise';
import ModalView from './ModalView';

function App() {
  const options = [
    { label: 'ten', value: '10' },
    { label: 'twenty', value: '20' },
    { label: 'thirty', value: '30' },
  ];

  const [stateSwitch, setStateSwitch] = useState(true);
  const [stateCheckbox, setstateCheckbox] = useState(true);
  const [stateTextfield, setstateTextField] = useState('Hello');
  const [select, setSelect] = useState('20');
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <div className="container">
        <form className="form">
          <Checkbox checked={stateCheckbox} onChange={setstateCheckbox} label="I'm checkbox" />
          <Switch checked={stateSwitch} onChange={setStateSwitch} label="I'm switch" />
          <TextField
            values={stateTextfield}
            onChange={setstateTextField}
            label="I'm textfield"
            helperText="Write smth"
          />
          <Select
            selectedItem={select}
            onChange={setSelect}
            label="Label"
            options={options}
            helperText="Choose smth"
          />
          <Button onClick={handleClick} children={'Click me'} />
          <Modal
            children={
              <ModalView
                checkbox={stateCheckbox}
                switchs={stateSwitch}
                modal={open}
                textfield={stateTextfield}
                select={select}
              />
            }
            open={open}
            onClose={setOpen}
          />
        </form>
      </div>
    </>
  );
}

export default App;
