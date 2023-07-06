import React, { useEffect, useState} from 'react';
// import { Paragraph } from '@contentful/f36-components';
import { FieldExtensionSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';
import CustomColorPicker from '../components/CustomColorPicker';

const Field = () => {
  const sdk = useSDK<FieldExtensionSDK>();
  const [selectedColor, setSelectedColor] = useState("");
  useEffect(() => {
    // This ensures our app has enough space to render
    // @TODO startAutoResizer does not work great with the react-select component, is there a better way?
    // Currently change the widget height based on open/close as a workaround
    sdk.window.updateHeight(60);

    // Get current value of the field so we can display it
  }, [sdk.field, sdk.window]);

  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  return <CustomColorPicker/>;
};

export default Field;
