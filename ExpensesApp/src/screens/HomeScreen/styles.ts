import {StyleSheet} from 'react-native';
import values from '../../constants/values';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: values.verticalPadding ,
    backgroundColor: colors.backgroundColor,
  },
  horizontalPaddingView: {
    paddingHorizontal: values.horizontalPadding,
  },
});

export default styles;
