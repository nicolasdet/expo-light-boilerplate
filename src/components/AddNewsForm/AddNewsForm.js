import { useState } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Text,
} from 'react-native';
import { Input } from '../ui/Input';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    Text: { value: '', isValid: null },
    Date: { value: '', isValid: null },
    Category: { value: '', isValid: null },
  });

  const ValidateFormData = (value, name) => {
    if (name === 'Date') {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (dateRegex.test(value)) {
        return true;
      }
    }

    return false;
  };

  const handleChange = (value, name) => {
    isValid = ValidateFormData(value, name);
    setFormData({
      ...formData,
      [name]: { value, isValid },
    });
  };

  const submitForm = () => {
    if (formData.Date.isValid) {
      return alert('validation ok');
    }
    alert('validation fail');
  };
  return <Text>Form</Text>;
};

const style = StyleSheet.create({});
