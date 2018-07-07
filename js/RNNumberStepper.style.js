import { StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  containerSmall: {
    width: scale(150),
    height: verticalScale(35)
  },
  containerMedium: {
    width: scale(160),
    height: verticalScale(40)
  },
  containerLarge: {
    width: scale(170),
    height: verticalScale(45)
  },
  buttonContainer: {
    height: "100%"
  },
  buttonSubContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonLabelContainer: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: moderateScale(24),
    fontWeight: "bold"
  },
  labelContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  valueStyle: {
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold"
  },
  valueStyleSmall: {
    fontSize: moderateScale(14)
  },
  valueStyleMedium: {
    fontSize: moderateScale(16)
  },
  valueStyleLarge: {
    fontSize: moderateScale(18)
  }
});

export default style;