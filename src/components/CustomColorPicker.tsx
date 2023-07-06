import { useEffect, useState } from 'react';
import { FieldExtensionSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import { TextInput } from '@contentful/f36-components';

const re = /^#(?:[0-9a-f]{3}){1,2}$/i;

const CustomColorPicker = () => {
    const sdk = useSDK<FieldExtensionSDK>();
    const [color, setColor] = useState(sdk.field.getValue());
    

    useEffect(() => {
        const storedValue = sdk.field.getValue();
        setColor(storedValue);
        return () => {}
    }, [color, sdk.field]);

    const handleColorFieldChange = (e: any) => {
        let value = e ? e.target.value : null;
        try {
          if (!value || !re.test(value)) return; // validate value
          setColor(value);
          sdk.field.setValue(value);
        } catch (error) {
          console.log("error", error);
        }
      };

    return (
        <TextInput
        style={{
            backgroundColor: color,
          }}
          id={"color-picker"}
          name={"color-picker"}
          type="color"
          value={color}
          onChange={handleColorFieldChange}
        />
    );
    
}

export default CustomColorPicker;