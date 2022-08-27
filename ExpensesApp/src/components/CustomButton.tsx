import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

interface CustomButtonProps {
  width?: number;
  height?: number;
  radius?: number;
  textColor?: string;
  textSize?: number;
  text?: string;
  backgroundColor?: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  width = 100,
  height = 30,
  radius = 0,
  textColor = 'white',
  textSize = 18,
  text = 'Button',
  backgroundColor = '#CBDFE4',
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            width: width,
            height: height,
            backgroundColor: backgroundColor,
            borderRadius: radius,
          },
        ]}>
        <Text
          style={{
            color: textColor,
            fontSize: textSize,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomButton;
